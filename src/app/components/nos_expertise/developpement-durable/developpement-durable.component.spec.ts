import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppementDurableComponent } from './developpement-durable.component';

describe('DeveloppementDurableComponent', () => {
  let component: DeveloppementDurableComponent;
  let fixture: ComponentFixture<DeveloppementDurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloppementDurableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppementDurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
