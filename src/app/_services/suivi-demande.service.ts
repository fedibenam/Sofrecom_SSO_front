import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuiviDemandeService {
  private apiUrl = 'http://localhost:8080/api/missions'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Fetch missions by status
  getMissionsByStatus(status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status/${status}`);
  }

  // Fetch past missions
  getPastMissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/past`);
  }

  // Fetch employees by manager
  getEmployeesByManager(nomManager: string, prenomManager: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/manager/employees`, {
      params: { nomManager, prenomManager },
    });
  }
  getMissionsByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${encodeURIComponent(username)}`);
  }
}