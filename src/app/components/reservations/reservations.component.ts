import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = []; // Store the reservations data
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.decodeToken(token);
      const participantName = decodedToken?.name || 'N/A'; // Extract participant name from the token

      this.fetchReservationHistory(participantName); // Fetch reservation history
    } else {
      console.error('No token found!');
      this.errorMessage = 'User is not authenticated.';
    }
  }

  fetchReservationHistory(participantName: string): void {
    const url = `http://localhost:8080/api/reservations/history?participantName=${encodeURIComponent(participantName)}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}` // Include the token in the Authorization header
    });

    this.http.get<any[]>(url, { headers }).subscribe(
      (data) => {
        this.reservations = data;
        console.log('Reservation History:', this.reservations);
      },
      (error) => {
        console.error('Error fetching reservation history:', error);
        this.errorMessage = 'Failed to load reservation history. Please try again later.';
      }
    );
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decode the token payload
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
}