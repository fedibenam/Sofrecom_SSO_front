import { TestBed } from '@angular/core/testing';

import { SuiviDaService } from './suivi-da.service';

describe('SuiviDaService', () => {
  let service: SuiviDaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviDaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
