import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationMetiersComponent } from './organisation-metiers.component';

describe('OrganisationMetiersComponent', () => {
  let component: OrganisationMetiersComponent;
  let fixture: ComponentFixture<OrganisationMetiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationMetiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
