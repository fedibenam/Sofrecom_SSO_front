import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-schedule',
  templateUrl: './restaurant-schedule.component.html',
  styleUrls: ['./restaurant-schedule.component.scss']
})
export class RestaurantScheduleComponent implements OnInit {
  selectedFile: File | null = null;
  pdfUrl: SafeResourceUrl | null = null;
  private apiUrl = 'http://localhost:8080/api/pdfs'; // Adjusted to match your backend mapping

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.adjustPdfViewerHeight();
    window.addEventListener('resize', this.adjustPdfViewerHeight);
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.adjustPdfViewerHeight);
  }
  
  adjustPdfViewerHeight = (): void => {
    const headerHeight = document.querySelector('app-header')?.clientHeight || 0;
    const footerHeight = document.querySelector('app-footer')?.clientHeight || 0;
    const pdfViewerContainer = document.querySelector('.pdf-viewer-container') as HTMLElement;
  
    if (pdfViewerContainer) {
      pdfViewerContainer.style.height = `${window.innerHeight - headerHeight - footerHeight}px`;
    }
  };

  ngOnInit(): void {
    // Automatically fetch and display the last uploaded PDF
    this.viewLastPdf();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadPdf(): void {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post(`${this.apiUrl}/upload`, formData, { responseType: 'text' }).subscribe(
      (response) => {
        console.log('PDF uploaded successfully:', response);
        alert(response);
        this.selectedFile = null;

        // Refresh the displayed PDF after a successful upload
        this.viewLastPdf();
      },
      (error) => {
        console.error('Error uploading PDF:', error);
        alert('Failed to upload PDF. Please try again.');
      }
    );
  }

  viewLastPdf(): void {
    const pdfEndpoint = `${this.apiUrl}/last`;

    this.http.get(pdfEndpoint, { responseType: 'blob', withCredentials: true }).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      },
      (error) => {
        console.error('Error fetching the last PDF:', error);
        alert('Failed to fetch the last uploaded PDF. Please try again.');
      }
    );
  }
}