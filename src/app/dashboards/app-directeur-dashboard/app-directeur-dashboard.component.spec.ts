import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirecteurDashboardComponent } from './app-directeur-dashboard.component';

describe('AppDirecteurDashboardComponent', () => {
  let component: AppDirecteurDashboardComponent;
  let fixture: ComponentFixture<AppDirecteurDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDirecteurDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDirecteurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
