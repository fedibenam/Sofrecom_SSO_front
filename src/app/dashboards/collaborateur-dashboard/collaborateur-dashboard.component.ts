import { Component } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Import Router
import { AuthService } from '../../_services/auth.service';
@Component({
  selector: 'app-collaborateur-dashboard',
  templateUrl: './collaborateur-dashboard.component.html',
  styleUrl: './collaborateur-dashboard.component.scss'
})
export class CollaborateurDashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);

  }

  applications = [
    {
      title: 'SofSalle',
      description: 'Réservez une salle pour vos réunions au sein de l’entreprise.',
      image: '/assets/App_images/sofsalle_sh.png',
      link: 'http://softun-salle.sofrecom-tunisie.com'
    },
    {
      title: 'GLPI',
      description: 'Créez des tickets pour l’équipe IT afin de résoudre vos problèmes techniques',
      image: '/assets/App_images/glpi_sh.png',
      link: 'https://helpdesk.sofrecom-tunisie.com/glpi/'
    },
    {
      title: 'HR Access',
      description: 'Accédez à vos informations professionnelles et suivez vos performances en temps réel.',
      image: '/assets/App_images/HR_Access.png',
      link: 'https://softun-sirh.sofrecom-tunisie.com:9091/GP4You'
    },
    {
      title: 'Sofrecom Brand',
      description: 'Découvrez l’introduction générale à l’entreprise et à ses valeurs.',
      image: '/assets/App_images/Sofrecom_brand.png',
      link: 'https://sof-france.sofrecom.fr/fr/sofrecom-brand'
    },
    {
      title: 'SofTravel',
      description: 'Suivez vos déplacements professionnels et gérez vos voyages d’affaires.',
      image: '/assets/App_images/Sof_travel.png',
      link: 'https://softravel.sofrecom-tunisie.com'
    },
    {
      title: 'SofTélétravail',
      description: 'Consultez vos journées de télétravail et gérez votre travail à distance',
      image: '/assets/App_images/Sof_teletravail.png',
      link: 'https://softun-teletravail.sofrecom-tunisie.com'
    }

  ];
}

