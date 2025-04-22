import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrl: './blog-area.component.scss'
})
export class BlogAreaComponent {
  constructor(private authService: AuthService) {}
 
  redirecting = true;
 
  redirectToSoftt() {
    this.authService.sendTokenToDjango().subscribe(
      () => {
        console.log('✅ Token sent successfully');
        // Now open the real page after token is sent
        window.open('http://127.0.0.1:8000/profil/', '_blank');
      },
      (error) => {
        console.error('❌ Error sending token to Django:', error);
        // Optionally show an alert or message if something goes wrong
        alert('Login failed');
      }
    );
  }  
}  
