import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAdminDashboardComponent } from './dashboards/app-admin-dashboard/app-admin-dashboard.component';
import { AppManagerDashboardComponent } from './dashboards/app-manager-dashboard/app-manager-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

// Add imports for missing components
import { CollaborateurDashboardComponent } from './dashboards/collaborateur-dashboard/collaborateur-dashboard.component';
import { AppDirecteurDashboardComponent } from './dashboards/app-directeur-dashboard/app-directeur-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // Add Profile Route
  { path: 'admin-dashboard', component: AppAdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'manager-dashboard', component: AppManagerDashboardComponent, canActivate: [AuthGuard], data: { role: 'manager' } },
  { path: 'collaborateur-dashboard', component: CollaborateurDashboardComponent, canActivate: [AuthGuard], data: { role: 'Utilisa. du domaine' } },
  { path: 'directeur-dashboard', component: AppDirecteurDashboardComponent, canActivate: [AuthGuard], data: { role: 'directeur' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}