import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuiviDAService {
  private apiUrl = 'http://localhost:8080/api/softachat'; // Base URL for the backend API

  constructor(private http: HttpClient) {}

  // Fetch demandes by nomDemandeur
  getDemandes(nomDemandeur: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/demandes`, {
      params: { nomDemandeur },
      withCredentials: true, // Include cookies for authentication
    });
  }
}