import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeletravailComponent } from './teletravail.component';

describe('TeletravailComponent', () => {
  let component: TeletravailComponent;
  let fixture: ComponentFixture<TeletravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeletravailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeletravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
