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
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Load user info from JSON file
    this.http.get<any>('/assets/user-info.json').subscribe(
      (data) => {
        this.userInfo = data;
        console.log('User Info loaded:', this.userInfo);

        // Send user info to backend to get token
        this.authService.sendUserInfo(this.userInfo).subscribe(
          (response: any) => {
            const token = response.token;
            if (token) {
              this.authService.saveToken(token);
              this.router.navigate(['/dashboard']);
              console.log('Token saved:', token);

              // Send token to Django
              this.authService.sendTokenToDjango().subscribe(
                (sendTokenResponse: any) => {
                  console.log('Response from /send-token:', sendTokenResponse);
                },
                (error: any) => {
                  console.error('Error sending token to Django:', error);
                }
              );
            }

            this.clearUserInfo();
          },
          (error: any) => {
            console.error('Error during login:', error);
          }
        );

        // Send user info to SofSalle backend (independent of other workflows)
        this.authService.sendUserInfoToSofsallesBackend(this.userInfo).subscribe(
          (sofsalleResponse) => {
            console.log('Response from /sofsalle:', sofsalleResponse);
          },
          (error) => {
            console.error('Error sending user info to SofSalle backend:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error loading user-info.json:', error);
      }
    );

    window.addEventListener('userLoggedIn', () => {
      this.router.navigate(['/dashboard']);
    });

    window.addEventListener('userLoggedOut', () => {
      console.log('Logout detected, redirecting to login.');
      this.router.navigate(['/login']);
    });
  }

  clearUserInfo(): void {
    this.userInfo = {
      username: '',
      fullName: '',
      groups: [],
    };
    console.log('User Info cleared:', this.userInfo);
  }
}