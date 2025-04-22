import { Component, AfterViewInit } from '@angular/core';
declare let L: any; // Leaflet from CDN

@Component({
  selector: 'app-nos-bureau',
  templateUrl: './nos-bureau.component.html',
  styleUrls: ['./nos-bureau.component.scss'] // ✅ FIXED: styleUrls not styleUrl
})
export class NosBureauComponent implements AfterViewInit {
  routes: any[] = [];
  route: any = null;

  ngAfterViewInit(): void {
    const map = L.map('map').setView([36.8, 10.2], 8); // Tunisia center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // ✅ Moved inside ngAfterViewInit
    const stops = [
      { name: 'Bouargoub collège', lat: 36.83178342191116,  lng: 10.233354515515044 },
      { name: 'Maamoura', lat: 34.769601418265154,  lng: 10.75083892250368 },
    ];

    stops.forEach(stop => {
      if (stop.lat !== null && stop.lng !== null) {
        const marker = L.marker([stop.lat, stop.lng]).addTo(map)
          .bindPopup(stop.name)
          .on('click', () => {
            this.showRoute(map, [36.8, 10.2], [stop.lat, stop.lng]);
          });
      } else {
        console.warn(`Invalid stop coordinates for: ${stop.name}`);
      }
    });
  }

  showRoute(map: any, start: number[], end: number[]): void {
    // Optional: implement route drawing logic here
    console.log('Show route from', start, 'to', end);
  }
}
