import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusMapComponent } from './bus-map.component';

describe('BusMapComponent', () => {
  let component: BusMapComponent;
  let fixture: ComponentFixture<BusMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
