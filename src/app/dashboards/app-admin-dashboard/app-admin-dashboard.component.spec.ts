import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminDashboardComponent } from './app-admin-dashboard.component';

describe('AppAdminDashboardComponent', () => {
  let component: AppAdminDashboardComponent;
  let fixture: ComponentFixture<AppAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAdminDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
