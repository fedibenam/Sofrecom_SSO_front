import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
 
@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.scss']
})
export class AppsListComponent {
  role: string[] | null = null;
  hoveredCardIndex: number | null = null;
  hoverTimer: any;
  appData = [
    { name: "Sof'TéléTravail", infoLink: "/teletravail", redirect: 'softt' },
    { name: "Sof'Salle", infoLink: "/reservations", redirect: 'sofsalle' },
    { name: "GP4You", infoLink: "/conge-travail", redirect: 'hraccess' },
    { name: "GLPI", infoLink: "/applications", redirect: 'glpi' },
    { name: "Sof'Brand", infoLink: "/applications", redirect: 'brand', if: 'collab' },
    { name: "Sof'Travel", infoLink: "/app-missions", redirect: 'travel' },
    { name: "Sof'Achat", infoLink: "/fact_demandes", redirect: 'sofachat', if: 'managerOrDirector' }
  ];
 
 
 
  constructor(private authService: AuthService) {}
 
  ngOnInit(): void {
    this.role = this.authService.getUserRole();
  }
 
  get isCollaborateur(): boolean {
    return this.role?.includes('Collaborateur') || false;
  }
 
  get isManagerOrDirector(): boolean {
    return this.role?.some(r => r === 'manager' || r === 'directeur') || false;
  }
 
  openRedirect(appName: string): void {
    window.open(`/redirect-al?app=${appName}`, '_blank');
  }
 
  startHoverDelay(index: number): void {
    this.cancelHoverDelay();
    this.hoverTimer = setTimeout(() => {
      this.hoveredCardIndex = index;
    }, 700); // 500ms delay
  }
 
  cancelHoverDelay(): void {
    clearTimeout(this.hoverTimer);
    this.hoveredCardIndex = null;
  }
}