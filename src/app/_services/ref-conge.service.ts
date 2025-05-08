import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefCongeService {
  private apiUrl = 'http://localhost:8080/api/conges'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Fetch conges by collaborateur
  getCongesByCollaborateur(collaborateur: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      params: { collaborateur },
      withCredentials: true, // Include cookies for authentication
    });
  }
}