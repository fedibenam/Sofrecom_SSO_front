// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/info'; // The API endpoint
  private sendTokenUrl = 'http://localhost:8080/api/auth/send-token'; // New endpoint for sending token

  constructor(private http: HttpClient) {}

  // Save JWT token to localStorage
  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
    const decoded = jwtDecode(token);
    console.log('Decoded Token:', decoded);  // Log the decoded token
  }

  // Get JWT token from localStorage
  getToken(): string | null {
    const token = localStorage.getItem('jwtToken');
    console.log('Retrieved token:', token); // Debugging: Log the token
    return token;
  }

  // Post user info to backend to receive token
  sendUserInfo(userInfo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userInfo); // Send the info and return observable
  }

  // New method to send userInfo to /send-token endpoint
  sendUserInfoToSendToken(userInfo: any): Observable<any> {
    return this.http.post<any>(this.sendTokenUrl, userInfo); // Send userInfo to /send-token endpoint
  }

  // Decode the token to extract user info (like roles)
  getUserRole(): string[] | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);
        return decodedToken.roles || null;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }

  // Check if user is authenticated by checking for a token
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  // Check for token and trigger userLoggedIn event if found
  checkForToken(): void {
    const token = this.getToken();
    if (token) {
      console.log('Token found during checkForToken:', token);
      window.dispatchEvent(new Event('userLoggedIn')); // Notify components
    } else {
      console.log('No token found during checkForToken.');
    }
  }

  logout(): void {
    localStorage.removeItem('jwtToken'); // Remove token from localStorage
    console.log('User logged out successfully.');
    window.dispatchEvent(new Event('userLoggedOut')); // Dispatch logout event
  }
}