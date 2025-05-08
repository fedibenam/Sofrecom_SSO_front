import { TestBed } from '@angular/core/testing';

import { SuiviDemandeService } from './suivi-demande.service';

describe('SuiviDemandeService', () => {
  let service: SuiviDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
