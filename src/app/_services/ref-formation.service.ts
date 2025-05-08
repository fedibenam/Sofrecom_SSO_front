import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefFormationService {
  private apiUrl = 'http://localhost:8080/api/formations'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Fetch planned sessions for the next month
  getPlannedSessionsForNextMonth(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/planned/next-month`, {
      withCredentials: true, // Include cookies for authentication
    });
  }

  // Fetch completed sessions
  getCompletedSessions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/completed`, {
      withCredentials: true, // Include cookies for authentication
    });
  }
}