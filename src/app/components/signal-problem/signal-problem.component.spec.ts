import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalProblemComponent } from './signal-problem.component';

describe('SignalProblemComponent', () => {
  let component: SignalProblemComponent;
  let fixture: ComponentFixture<SignalProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
