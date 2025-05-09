import { Component, Input, AfterViewInit } from '@angular/core';
import { Route } from '../../models/route';
import { Stop } from '../../models/stop';

declare let L: any;

@Component({
  selector: 'app-bus-map',
  templateUrl: './bus-map.component.html',
  styleUrls: ['./bus-map.component.scss']
})
export class BusMapComponent implements AfterViewInit {
  @Input() route!: Route;
  private map: any;

  get mapId(): string {
    return 'map-' + this.route.circuit.replace(/\s/g, '-');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map = L.map(this.mapId).setView([36.8, 10.2], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      const latlngs: any[] = [];

      this.route.stops.forEach((stop: Stop) => {
        const marker = L.marker([stop.lat, stop.lng])
          .addTo(this.map)
          .bindTooltip(`${stop.name}${stop.time ? ' - ' + stop.time : ''}`, { permanent: false });

        latlngs.push([stop.lat, stop.lng]);
      });

      if (latlngs.length >= 2) {
        L.polyline(latlngs, { color: 'blue' }).addTo(this.map);
      }
    }, 0);
  }
}
