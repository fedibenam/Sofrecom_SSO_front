import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauTelecomSiComponent } from './reseau-telecom-si.component';

describe('ReseauTelecomSiComponent', () => {
  let component: ReseauTelecomSiComponent;
  let fixture: ComponentFixture<ReseauTelecomSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReseauTelecomSiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReseauTelecomSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
