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
import { SignalProblemComponent } from './components/signal-problem/signal-problem.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SupportAreaComponent } from './components/support-area/support-area.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BlogAreaComponent } from './components/blog-area/blog-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotreEntrepriseComponent } from './components/a_propos_de_nous/notre-entreprise/notre-entreprise.component';
import { NotreEquipeComponent } from './components/a_propos_de_nous/notre-equipe/notre-equipe.component';
import { ResponsableSocialeComponent } from './components/a_propos_de_nous/responsable-sociale/responsable-sociale.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TeletravailComponent } from './components/teletravail/teletravail.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { BusStationsComponent } from './components/bus-stations/bus-stations.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantScheduleComponent } from './components/restaurant-schedule/restaurant-schedule.component';
import { NosBureauComponent } from './components/a_propos_de_nous/nos-bureau/nos-bureau.component';
import { InnovationDigitilasationComponent } from './components/nos_expertise/innovation-digitilasation/innovation-digitilasation.component';
import { ReseauTelecomSiComponent } from './components/nos_expertise/reseau-telecom-si/reseau-telecom-si.component';
import { DeveloppementDurableComponent } from './components/nos_expertise/developpement-durable/developpement-durable.component';
import { OrganisationMetiersComponent } from './components/nos_expertise/organisation-metiers/organisation-metiers.component';
import { MissionsComponent } from './components/missions/missions.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { MissionsInterneComponent } from './components/missions-interne/missions-interne.component';
import { CongesComponent } from './components/conges/conges.component';
import { FormationsComponent } from './components/formations/formations.component';

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
    SignalProblemComponent,
    ContactComponent,
    HeaderComponent,
    SliderComponent,
    SupportAreaComponent,
    ProductListComponent,
    BlogAreaComponent,
    FooterComponent,
    AboutUsComponent,
    NotreEntrepriseComponent,
    NotreEquipeComponent,
    ResponsableSocialeComponent,
    ReservationsComponent,
    TeletravailComponent,
    ApplicationsComponent,
    BusStationsComponent,
    RestaurantMenuComponent,
    RestaurantScheduleComponent,
    NosBureauComponent,
    InnovationDigitilasationComponent,
    ReseauTelecomSiComponent,
    DeveloppementDurableComponent,
    OrganisationMetiersComponent,
    MissionsComponent,
    DemandesComponent,
    MissionsInterneComponent,
    CongesComponent,
    FormationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}