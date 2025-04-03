import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  role: string[] | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('DashboardComponent initialized');
    if (!this.authService.isAuthenticated()) {
      console.log('User not authenticated, redirecting to login');
      this.router.navigate(['/']);
    } else {
      this.role = this.authService.getUserRole();
      console.log('User roles:', this.role);
  
      // Debugging: Check role conditions
      if (this.role?.includes('admin')) {
        console.log('Admin dashboard should be displayed');
      }
      if (this.role?.includes('manager')) {
        console.log('Manager dashboard should be displayed');
      }
      if (this.role?.includes('Utilisa. du domaine')) {
        console.log('Collaborateur dashboard should be displayed');
      }
      if (this.role?.includes('directeur')) {
        console.log('Directeur dashboard should be displayed');
      }
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
