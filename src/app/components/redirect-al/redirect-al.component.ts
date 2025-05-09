import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
 
@Component({
  selector: 'app-redirect-al',
  templateUrl: './redirect-al.component.html',
  styleUrls: ['./redirect-al.component.scss']
})
export class RedirectALComponent implements OnInit {
  appName: string | null = null;
 
  constructor(private route: ActivatedRoute, private authService: AuthService) {}
  fullAppName: string = '';
 
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.appName = params.get('app');
      if (this.appName) {
        this.fullAppName = this.getFullAppName(this.appName);
        this.handleRedirection(this.appName);
      }
    });
  }
 
  getFullAppName(appKey: string): string {
    const nameMap: { [key: string]: string } = {
      softt: "Sof'Télétravail",
      sofsalle: "Sof'Salle",
      glpi: "GLPI",
      softravel: "Sof'Travel",
      hraccess: "HR Access",
      brand: "Sof'Brand",
      sofachat: "Sof'AChat"
    };
    return nameMap[appKey] || appKey;
  }
 
  handleRedirection(app: string): void {
    if (app === 'softt') {
      this.authService.sendTokenToDjango()
      window.location.href = 'http://127.0.0.1:8000/profil/';
    } else if (app === 'sofsalle') {
      window.location.href = 'http://softun-salle.sofrecom-tunisie.com/#/login';
    } else if (app === 'glpi') {
      window.location.href = 'https://helpdesk.sofrecom-tunisie.com/glpi/';
    } else if (app === 'softravel') {
      window.location.href = 'https://softravel.sofrecom-tunisie.com/#/login';
    } else if (app === 'hraccess') {
      window.location.href = 'https://softun-sirh.sofrecom-tunisie.com:9091/GP4You/login';
    } else if (app === 'brand') {
      window.location.href = 'https://sof-france.sofrecom.fr/fr/sofrecom-brand';
    } else if (app === 'sofachat') {
      window.location.href = 'https://sofachat.intra';
    } else {
      console.warn('❗ Application inconnue :', app);
    }
  }
}