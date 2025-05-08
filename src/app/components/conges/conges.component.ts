import { Component, OnInit } from '@angular/core';
import { RefCongeService } from '../../_services/ref-conge.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.scss'],
})
export class CongesComponent implements OnInit {
  conges: any[] = [];
  errorMessage: string | null = null;

  constructor(private refCongeService: RefCongeService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserInfoAndFetchConges();
  }

  // Load user info from the token and fetch conges
  private loadUserInfoAndFetchConges(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.authService.decodeToken(token);
      const collaborateur = decodedToken?.name || ''; // Extract the "name" field from the token

      if (collaborateur) {
        this.fetchConges(collaborateur);
      } else {
        console.error('Failed to extract collaborateur from token.');
        this.errorMessage = 'Failed to fetch user details from token.';
      }
    } else {
      console.error('No token found!');
      this.errorMessage = 'User is not authenticated.';
    }
  }

  // Fetch conges
  private fetchConges(collaborateur: string): void {
    this.refCongeService.getCongesByCollaborateur(collaborateur).subscribe(
      (data) => {
        console.log('Fetched Conges:', data);
        this.conges = data;
        this.errorMessage = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error fetching conges:', error);
        this.errorMessage = 'Failed to fetch conges. Please try again later.';
      }
    );
  }
}