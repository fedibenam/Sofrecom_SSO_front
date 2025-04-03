import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppManagerDashboardComponent } from './app-manager-dashboard.component';

describe('AppManagerDashboardComponent', () => {
  let component: AppManagerDashboardComponent;
  let fixture: ComponentFixture<AppManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppManagerDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
