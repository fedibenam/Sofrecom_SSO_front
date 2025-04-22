import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signal-problem',
  templateUrl: './signal-problem.component.html',
  styleUrls: ['./signal-problem.component.scss']
})
export class SignalProblemComponent implements OnInit {
  userInfo: { username: string; fullName: string } | null = null;

  formData = {
    problemType: '',
    description: '',
    username: '',
    fullName: ''
  };

  problemReports: any[] = []; // Holds all problem reports

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.fetchAllProblems(); // Fetch all problems on initialization
  }

  loadUserInfo(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.authService.decodeToken(token);
      this.userInfo = {
        username: decodedToken?.sub || 'N/A',
        fullName: decodedToken?.name || 'N/A'
      };
      // Pre-fill the username and fullName in the form
      this.formData.username = this.userInfo.username;
      this.formData.fullName = this.userInfo.fullName;
    } else {
      console.error('No token found!');
    }
  }

  onSubmit(): void {
    const apiUrl = 'http://localhost:8080/api/problems/submit';
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        console.log('Problem submitted successfully:', response);
        alert('Votre problème a été soumis avec succès !');
        this.fetchAllProblems(); // Refresh the table after submission
      },
      (error) => {
        console.error('Error submitting problem:', error);
        alert('Une erreur est survenue lors de la soumission du problème.');
      }
    );
  }

  fetchAllProblems(): void {
    const apiUrl = 'http://localhost:8080/api/problems/all';
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        console.log('Fetched problem reports:', response);
        this.problemReports = response;
      },
      (error) => {
        console.error('Error fetching problem reports:', error);
      }
    );
  }
}