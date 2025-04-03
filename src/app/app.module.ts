import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppAdminDashboardComponent } from './dashboards/app-admin-dashboard/app-admin-dashboard.component';
import { AppManagerDashboardComponent } from './dashboards/app-manager-dashboard/app-manager-dashboard.component';
import { CollaborateurDashboardComponent } from './dashboards/collaborateur-dashboard/collaborateur-dashboard.component';
import { AppDirecteurDashboardComponent } from './dashboards/app-directeur-dashboard/app-directeur-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppAdminDashboardComponent,
    AppManagerDashboardComponent,
    CollaborateurDashboardComponent,
    AppDirecteurDashboardComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}