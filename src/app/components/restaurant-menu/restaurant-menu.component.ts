import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../_services/image.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
})
export class RestaurantMenuComponent implements OnInit {
  selectedFile: File | null = null; // Holds the selected file
  description: string = ''; // Holds the description for the image
  latestImageUrl: string | null = null; // URL for the latest image
  latestImageDescription: string | null = null; // Description of the latest image
  errorMessage: string | null = null; // Error message for display

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadLatestImage(); // Load the latest image on component initialization
  }

  // Triggered when a file is selected
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Upload the selected image with a description
  uploadImage(): void {
    if (!this.selectedFile || !this.description.trim()) {
      this.errorMessage = 'Please select a file and provide a description.';
      return;
    }

    this.imageService.uploadImage(this.selectedFile, this.description).subscribe(
      (response) => {
        console.log(response);
        this.errorMessage = null;
        alert('Image uploaded successfully!');
        this.loadLatestImage(); // Refresh the latest image
      },
      (error) => {
        console.error('Error uploading image:', error);
        this.errorMessage = 'Failed to upload image. Please try again.';
      }
    );
  }

  // Load the latest image and its description
  loadLatestImage(): void {
    this.imageService.getLatestImage().subscribe(
      (response) => {
        try {
          const byteCharacters = atob(response.image);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: response.type });
          this.latestImageUrl = URL.createObjectURL(blob);
          this.latestImageDescription = response.description;
        } catch (error) {
          console.error('Error processing image Blob:', error);
          this.errorMessage = 'Failed to process the latest image.';
        }
      },
      (error) => {
        console.error('Error fetching latest image:', error);
        this.errorMessage = 'Failed to load the latest image.';
      }
    );
  }
  
}