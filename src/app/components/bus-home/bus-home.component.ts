import { Component, OnInit } from '@angular/core';
import { Route } from '../../models/route';
import { BusService } from '../../_services/bus.service';

@Component({
  selector: 'app-bus-home',
  templateUrl: './bus-home.component.html',
  styleUrls: ['./bus-home.component.scss']
})
export class BusHomeComponent implements OnInit {
  allRoutes: Route[] = [];
  filteredRoutes: Route[] = [];
  searchTerm: string = '';

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.allRoutes = this.busService.getRoutes();
    this.filteredRoutes = [...this.allRoutes];
  }

  filterRoutes(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredRoutes = this.allRoutes.filter(route =>
      route.circuit.toLowerCase().includes(term)
    );
  }
}
