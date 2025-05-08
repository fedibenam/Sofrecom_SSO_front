import { Component, OnInit } from '@angular/core';
import { SuiviDAService } from '../../_services/suivi-da.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss'],
})
export class DemandesComponent implements OnInit {
  demandes: any[] = [];
  errorMessage: string | null = null;

  constructor(private suiviDAService: SuiviDAService, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchDemandes();
  }

  // Decode the token to extract nomDemandeur
  private getNomDemandeurFromToken(): string | null {
    const token = this.authService.getToken(); // Use AuthService to get the token
    if (!token) {
      console.error('No token found!');
      this.errorMessage = 'User is not authenticated.';
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
      return payload?.name || null; // Assuming the token contains a "name" field
    } catch (error) {
      console.error('Error decoding token:', error);
      this.errorMessage = 'Failed to decode token.';
      return null;
    }
  }

  // Fetch demandes
  fetchDemandes(): void {
    const nomDemandeur = this.getNomDemandeurFromToken();
    if (!nomDemandeur) {
      return; // Stop execution if nomDemandeur is not found
    }

    this.suiviDAService.getDemandes(nomDemandeur).subscribe(
      (data) => {
        this.demandes = data;
        this.errorMessage = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error fetching demandes:', error);
        this.errorMessage = 'Failed to fetch demandes. Please try again later.';
      }
    );
  }
}