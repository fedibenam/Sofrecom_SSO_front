import { Component, OnInit } from '@angular/core';
import { SuiviDemandeService } from '../../_services/suivi-demande.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss'],
})
export class MissionsComponent implements OnInit {
  missions: any[] = [];
  pastMissions: any[] = [];
  employees: any[] = [];
  errorMessage: string | null = null;

  missionsLimit = 10; // Limit for displaying missions
  pastMissionsLimit = 10; // Limit for displaying past missions
  employeesLimit = 10; // Limit for displaying employees
  selectedStatus = 'VALIDEE'; // Default status for missions

  constructor(
    private suiviDemandeService: SuiviDemandeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchMissionsByStatus(this.selectedStatus);
    this.fetchPastMissions();
    this.loadManagerFromTokenAndFetchEmployees();
  }

  // Fetch missions based on the selected status
  fetchMissionsByStatus(status: string): void {
    this.suiviDemandeService.getMissionsByStatus(status).subscribe(
      (data) => {
        this.missions = data;
      },
      (error) => {
        console.error('Error fetching missions by status:', error);
        this.errorMessage = 'Failed to fetch missions by status.';
      }
    );
  }

  // Fetch past missions
  fetchPastMissions(): void {
    this.suiviDemandeService.getPastMissions().subscribe(
      (data) => {
        this.pastMissions = data;
      },
      (error) => {
        console.error('Error fetching past missions:', error);
        this.errorMessage = 'Failed to fetch past missions.';
      }
    );
  }

  // Fetch employees managed by the logged-in user
  fetchEmployeesByManager(nomManager: string, prenomManager: string): void {
    this.suiviDemandeService.getEmployeesByManager(nomManager, prenomManager).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees by manager:', error);
        this.errorMessage = 'Failed to fetch employees by manager.';
      }
    );
  }

  // Decode the token and fetch employees managed by the logged-in user
  loadManagerFromTokenAndFetchEmployees(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.decodeToken(token);
      const fullName = decodedToken?.name || ''; // Extract the "name" field from the token
      const [prenom, nom] = fullName.split(' '); // Split the name into first name (prenom) and last name (nom)

      if (nom && prenom) {
        this.fetchEmployeesByManager(nom, prenom);
      } else {
        console.error('Failed to extract nom and prenom from token.');
        this.errorMessage = 'Failed to fetch manager details from token.';
      }
    } else {
      console.error('No token found!');
      this.errorMessage = 'User is not authenticated.';
    }
  }

  // Load more missions
  loadMoreMissions(): void {
    if (this.missionsLimit < this.missions.length) {
      this.missionsLimit += 10;
    }
  }

  // Load more past missions
  loadMorePastMissions(): void {
    if (this.pastMissionsLimit < this.pastMissions.length) {
      this.pastMissionsLimit += 10;
    }
  }

  // Load more employees
  loadMoreEmployees(): void {
    if (this.employeesLimit < this.employees.length) {
      this.employeesLimit += 10;
    }
  }

  // Decode the JWT token
  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1])); // Decode the token payload
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  // Handle status change from the dropdown
  onStatusChange(): void {
    this.missions = [];
    this.missionsLimit = 10; // Reset the limit
    this.fetchMissionsByStatus(this.selectedStatus);
  }
}