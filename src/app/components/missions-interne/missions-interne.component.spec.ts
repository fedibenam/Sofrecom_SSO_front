import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsInterneComponent } from './missions-interne.component';

describe('MissionsInterneComponent', () => {
  let component: MissionsInterneComponent;
  let fixture: ComponentFixture<MissionsInterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionsInterneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionsInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
