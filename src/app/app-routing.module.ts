import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAdminDashboardComponent } from './dashboards/app-admin-dashboard/app-admin-dashboard.component';
import { AppManagerDashboardComponent } from './dashboards/app-manager-dashboard/app-manager-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { SignalProblemComponent } from './components/signal-problem/signal-problem.component'; // Add this import for the SignalProblemComponent
// Add imports for missing components
import { CollaborateurDashboardComponent } from './dashboards/collaborateur-dashboard/collaborateur-dashboard.component';
import { AppDirecteurDashboardComponent } from './dashboards/app-directeur-dashboard/app-directeur-dashboard.component';
import {NotreEntrepriseComponent} from './components/a_propos_de_nous/notre-entreprise/notre-entreprise.component'; // Add this import for the NotreEntrepriseComponent
import {NotreEquipeComponent} from './components/a_propos_de_nous/notre-equipe/notre-equipe.component';
import{ResponsableSocialeComponent} from './components/a_propos_de_nous/responsable-sociale/responsable-sociale.component';
import{ReservationsComponent} from './components/reservations/reservations.component'; // Add this import for the ReservationsComponent
import { TeletravailComponent } from './components/teletravail/teletravail.component'; // Add this import for the TeletravailComponent  
import{ApplicationsComponent} from './components/applications/applications.component'; // Add this import for the ApplicationsComponent
import{BusStationsComponent} from './components/bus-stations/bus-stations.component';
import{RestaurantMenuComponent} from './components/restaurant-menu/restaurant-menu.component'; // Add this import for the RestaurantMenuComponent
import{RestaurantScheduleComponent} from './components/restaurant-schedule/restaurant-schedule.component'; // Add this import for the RestaurantScheduleComponent
import{NosBureauComponent} from './components/a_propos_de_nous/nos-bureau/nos-bureau.component'
import{InnovationDigitilasationComponent} from './components/nos_expertise/innovation-digitilasation/innovation-digitilasation.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Add Profile Route
  { path: 'admin-dashboard', component: AppAdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'manager-dashboard', component: AppManagerDashboardComponent, canActivate: [AuthGuard], data: { role: 'manager' } },
  { path: 'collaborateur-dashboard', component: CollaborateurDashboardComponent, canActivate: [AuthGuard], data: { role: 'Collaborateur' } },
  { path: 'directeur-dashboard', component: AppDirecteurDashboardComponent, canActivate: [AuthGuard], data: { role: 'directeur' } },
  {path: 'signal-problem', component: SignalProblemComponent, canActivate: [AuthGuard]}, // Add this route for the SignalProblemComponent
  {path: 'notre-entreprise', component: NotreEntrepriseComponent, canActivate: [AuthGuard]}, // Add this route for the SignalProblemComponent
  {path: 'notre-equipe', component: NotreEquipeComponent, canActivate: [AuthGuard]}, // Add this route for the SignalProblemComponent
  {path: 'responsable-sociale', component: ResponsableSocialeComponent, canActivate: [AuthGuard]}, // Add this route for the SignalProblemComponent
  {path: 'reservations', component: ReservationsComponent, canActivate: [AuthGuard]}, // Add this route for the ReservationsComponent 
  {path: 'teletravail', component: TeletravailComponent, canActivate: [AuthGuard]}, // Add this route for the TeletravailComponent
  {path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]}, // Add this route for the ApplicationsComponent
  {path: 'Busstation', component: BusStationsComponent, canActivate: [AuthGuard]},
  {path: 'restaurant-menu', component: RestaurantMenuComponent, canActivate: [AuthGuard]}, // Add this route for the RestaurantMenuComponent
  {path: 'restaurant-schedule', component: RestaurantScheduleComponent, canActivate: [AuthGuard]}, // Add this route for the RestaurantScheduleComponent
  {path: 'nos_bureau', component: NosBureauComponent, canActivate: [AuthGuard]}, // Add this route for the RestaurantScheduleComponent
  {path: 'nos_bureau', component: InnovationDigitilasationComponent, canActivate: [AuthGuard]}, // Add this route for the RestaurantScheduleComponent
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}