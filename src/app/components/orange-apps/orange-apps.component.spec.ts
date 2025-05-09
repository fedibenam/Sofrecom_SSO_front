import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeAppsComponent } from './orange-apps.component';

describe('OrangeAppsComponent', () => {
  let component: OrangeAppsComponent;
  let fixture: ComponentFixture<OrangeAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrangeAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrangeAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
