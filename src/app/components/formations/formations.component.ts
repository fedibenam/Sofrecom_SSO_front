import { Component, OnInit } from '@angular/core';
import { RefFormationService } from '../../_services/ref-formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  plannedSessions: any[] = [];
  completedSessions: any[] = [];
  errorMessage: string | null = null;

  constructor(private refFormationService: RefFormationService) {}

  ngOnInit(): void {
    this.fetchPlannedSessions();
    this.fetchCompletedSessions();
  }

  // Fetch planned sessions for the next month
  private fetchPlannedSessions(): void {
    this.refFormationService.getPlannedSessionsForNextMonth().subscribe(
      (data) => {
        console.log('Planned Sessions:', data);
        this.plannedSessions = data;
        this.errorMessage = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error fetching planned sessions:', error);
        this.errorMessage = 'Failed to fetch planned sessions. Please try again later.';
      }
    );
  }

  // Fetch completed sessions
  private fetchCompletedSessions(): void {
    this.refFormationService.getCompletedSessions().subscribe(
      (data) => {
        console.log('Completed Sessions:', data);
        this.completedSessions = data;
        this.errorMessage = null; // Clear any previous errors
      },
      (error) => {
        console.error('Error fetching completed sessions:', error);
        this.errorMessage = 'Failed to fetch completed sessions. Please try again later.';
      }
    );
  }
}