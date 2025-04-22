import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosBureauComponent } from './nos-bureau.component';

describe('NosBureauComponent', () => {
  let component: NosBureauComponent;
  let fixture: ComponentFixture<NosBureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosBureauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
