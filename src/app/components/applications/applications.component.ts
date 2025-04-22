import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  userInfo: any = null;
  reservations: any[] = [];
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.decodeToken(token);
      const nomEmp = decodedToken?.name || 'N/A'; // Extract employee name
      console.log('Decoded nomEmp:', nomEmp);

      // Fetch user data from the backend API
      this.http.get(`http://localhost:8080/api/users/${encodeURIComponent(nomEmp)}`).subscribe(
        (data) => {
          console.log('Raw API Response:', data);
          this.userInfo = data; // Assign fetched data to `userInfo`
          console.log('User Info:', this.userInfo);

          // Fetch reservations after user info is loaded
          this.fetchReservationHistory(this.userInfo.nomEmp);
        },
        (error) => {
          console.error('Error fetching user info:', error);
        }
      );
    } else {
      console.error('No token found!');
    }
  }

  fetchReservationHistory(participantName: string): void {
    if (!participantName) {
      console.error('Participant name is missing.');
      this.errorMessage = 'Failed to load reservation history. Participant name is missing.';
      return;
    }

    const url = `http://localhost:8080/api/reservations/history?participantName=${encodeURIComponent(participantName)}`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.reservations = data;
        console.log('Reservations:', this.reservations);
      },
      (error) => {
        console.error('Error fetching reservation history:', error);
        this.errorMessage = 'Failed to load reservation history. Please try again later.';
      }
    );
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decode JWT token payload
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  logout(): void {
    this.authService.logout(); // Clear token and trigger logout
    this.router.navigate(['/login']); // Redirect to login page
  }
}