import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAlComponent } from './redirect-al.component';

describe('RedirectAlComponent', () => {
  let component: RedirectAlComponent;
  let fixture: ComponentFixture<RedirectAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirectAlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedirectAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
