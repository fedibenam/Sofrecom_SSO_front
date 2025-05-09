import { Component } from '@angular/core';
 

@Component({
  selector: 'app-orange-apps',
  templateUrl: './orange-apps.component.html',
  styleUrls: ['./orange-apps.component.scss']
})
export class OrangeAppsComponent {
  hoveredCardIndex: number | null = null;
  hoverTimer: any;
 
  appData = [
    { name: "My Job", url: "https://gateform.wam.sso.intraorange/pages/authent/gassiLikeForm?TYPE=33554433&REALMOID=06-000f2aaa-2731-18f6-90a8-20140a7690bd&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-aTNlSkYkLSTR%2bly6MnspqBqTo6tvME4D9javfZGKwh6YsLmVjWCNJ7j8AcM0lSJ2&TARGET=-SM-https%3a%2f%2fidp%2ewam%2esso%2eintraorange%2fwamprotected%2fauthgassi#/Me" },
    { name: "Plazza", url: "https://plazza.orange.com/login.jspa?referer=%252Fgroups%252Fquality-management-sofrecom-tunisie" },
    { name: "Mon SI", url: "https://msi.sso.francetelecom.fr/monsi/index.html#/applications" }
  ];
 
  openRedirect(url: string): void {
    window.open(url, '_blank');
  }
 
  startHoverDelay(index: number): void {
    this.cancelHoverDelay();
    this.hoverTimer = setTimeout(() => {
      this.hoveredCardIndex = index;
    }, 700);
  }
 
  cancelHoverDelay(): void {
    clearTimeout(this.hoverTimer);
    this.hoveredCardIndex = null;
  }
}
 