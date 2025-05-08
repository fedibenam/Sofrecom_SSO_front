import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private apiUrl = 'http://localhost:8080/api/missions'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Fetch mission details by firstName and lastName
  getMissionDetails(firstName: string, lastName: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      params: { firstName, lastName },
      withCredentials: true, // Include cookies for authentication
    });
  }
}