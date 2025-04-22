import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStationsComponent } from './bus-stations.component';

describe('BusStationsComponent', () => {
  let component: BusStationsComponent;
  let fixture: ComponentFixture<BusStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
