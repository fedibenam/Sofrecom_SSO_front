import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode"; // Correct import for default export

@Component({
  selector: 'app-signal-problem',
  templateUrl: './signal-problem.component.html',
  styleUrls: ['./signal-problem.component.scss']
})
export class SignalProblemComponent  implements OnInit {
  userInfo: { username: string; fullName: string; groups: string[] } | null = null;
  
    constructor(private authService: AuthService,  private router: Router) {}
    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  
    ngOnInit(): void {
      this.loadUserInfo();
    }
  
  formData = {
    username: '',
    problemType: '',
    description: ''
  };

  onSubmit(): void {
    console.log('Form Submitted:', this.formData);
    // Add logic to send the form data to a backend API or service
    alert('Your problem has been submitted successfully!');
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