// filepath: src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo = {
    username: '',
    fullName: '',
    groups: [],
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    // Fetch user info from user-info.json
    this.http.get<any>('/assets/user-info.json').subscribe(
      (data) => {
        this.userInfo = data; // Populate userInfo with data from JSON
        console.log('User Info loaded:', this.userInfo);

        // Handle the login process
        this.authService.sendUserInfo(this.userInfo).subscribe(
          (response) => {
            const token = response.token;
            if (token) {
              this.authService.saveToken(token); // Save token to localStorage
              this.router.navigate(['/dashboard']); // Redirect to dashboard
            }

            // Clear the userInfo object after processing
            this.clearUserInfo();
          },
          (error) => {
            console.error('Error during login:', error);
          }
        );
      },
      (error) => {
        console.error('Error loading user-info.json:', error);
      }
    );

    // Listen for login event
    window.addEventListener('userLoggedIn', () => {
      this.router.navigate(['/dashboard']);
    });

    // Listen for logout event
    window.addEventListener('userLoggedOut', () => {
      console.log('Logout detected, redirecting to login.');
      this.router.navigate(['/login']);
    });
  }

  // Method to clear the userInfo object
  clearUserInfo(): void {
    this.userInfo = {
      username: '',
      fullName: '',
      groups: [],
    };
    console.log('User Info cleared:', this.userInfo);
  }
}