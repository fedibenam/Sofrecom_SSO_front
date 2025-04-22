import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teletravail',
  templateUrl: './teletravail.component.html',
  styleUrl: './teletravail.component.scss'
})
export class TeletravailComponent implements OnInit{
  userInfo: any = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.decodeToken(token);
      const nomEmp = decodedToken?.name || 'N/A'; // Use 'name' instead of 'sub'
      console.log('Decoded nomEmp:', nomEmp);
  
      // Fetch user data from the backend API
      this.http.get(`http://localhost:8080/api/users/${encodeURIComponent(nomEmp)}`).subscribe(
        (data) => {
          console.log('Raw API Response:', data);
          this.userInfo = data;
          console.log('User Info:', this.userInfo);
        },
        (error) => {
          console.error('Error fetching user info:', error);
        }
      );
    } else {
      console.error('No token found!');
    }
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}