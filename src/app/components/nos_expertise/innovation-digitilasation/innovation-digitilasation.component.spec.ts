import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationDigitilasationComponent } from './innovation-digitilasation.component';

describe('InnovationDigitilasationComponent', () => {
  let component: InnovationDigitilasationComponent;
  let fixture: ComponentFixture<InnovationDigitilasationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnovationDigitilasationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnovationDigitilasationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
