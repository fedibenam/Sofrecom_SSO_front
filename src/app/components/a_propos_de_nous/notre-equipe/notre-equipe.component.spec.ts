import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreEquipeComponent } from './notre-equipe.component';

describe('NotreEquipeComponent', () => {
  let component: NotreEquipeComponent;
  let fixture: ComponentFixture<NotreEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotreEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotreEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
