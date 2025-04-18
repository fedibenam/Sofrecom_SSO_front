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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}