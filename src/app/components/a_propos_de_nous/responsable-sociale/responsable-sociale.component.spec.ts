import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableSocialeComponent } from './responsable-sociale.component';

describe('ResponsableSocialeComponent', () => {
  let component: ResponsableSocialeComponent;
  let fixture: ComponentFixture<ResponsableSocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsableSocialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsableSocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
