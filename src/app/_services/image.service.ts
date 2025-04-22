import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:8080/api/image'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Upload an image
  uploadImage(file: File, description: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
  
    return this.http.post<string>(`${this.apiUrl}/upload`, formData, {
      responseType: 'text' as 'json', // Expect a plain text response
    });
  }
  
  getLatestImage(): Observable<{ description: string; image: string; type: string }> {
    return this.http.get<{ description: string; image: string; type: string }>(`${this.apiUrl}/today`);
  }
  
}