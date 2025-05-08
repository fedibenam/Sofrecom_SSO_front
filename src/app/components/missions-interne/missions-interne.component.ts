import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../_services/mission.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-missions-interne',
  templateUrl: './missions-interne.component.html', // Updated template file path
  styleUrls: ['./missions-interne.component.scss'], // Updated style file path
})
export class MissionsInterneComponent implements OnInit {
  missions: any[] = [];
  errorMessage: string | null = null;

  constructor(private missionService: MissionService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserInfoAndFetchMissions();
  }

  // Load user info from the token and fetch mission details
  private loadUserInfoAndFetchMissions(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.authService.decodeToken(token);
      const fullName = decodedToken?.name || ''; // Extract the "name" field from the token
      const nameParts = fullName.split(' '); // Split the name into parts
  
      // Adjust logic to handle multi-word first names
      const lastName = nameParts.pop(); // Last part is the last name
      const firstName = nameParts.join(' '); // Combine the rest as the first name
  
      if (firstName && lastName) {
        console.log('Extracted First Name:', firstName);
        console.log('Extracted Last Name:', lastName);
        this.fetchMissionDetails(firstName, lastName);
      } else {
        console.error('Failed to extract first name and last name from token.');
        this.errorMessage = 'Failed to fetch user details from token.';
      }
    } else {
      console.error('No token found!');
      this.errorMessage = 'User is not authenticated.';
    }
  }

  // Fetch mission details
  private fetchMissionDetails(firstName: string, lastName: string): void {
    console.log('API Parameters:', { firstName, lastName });
    this.missionService.getMissionDetails(firstName, lastName).subscribe(
      (data) => {
        console.log('Fetched Missions:', data);
        this.missions = data;
        this.errorMessage = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error fetching mission details:', error);
        this.errorMessage = 'Failed to fetch mission details. Please try again later.';
      }
    );
  }
}