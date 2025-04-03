import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { jwtDecode } from "jwt-decode"; // Correct import for default export
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: { username: string; fullName: string; groups: string[] } | null = null;

  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      console.log('Decoded Token:', decodedToken); // Debugging: Log the decoded token
      this.userInfo = {
        username: decodedToken?.sub || 'N/A', // Map 'sub' to 'username'
        fullName: decodedToken?.name || 'N/A', // Map 'name' to 'fullName'
        groups: decodedToken?.role || [] // Map 'role' to 'groups'
      };
      console.log('User Info:', this.userInfo); // Debugging: Log the userInfo object
    } else {
      console.error('No token found!');
    }
  }
}