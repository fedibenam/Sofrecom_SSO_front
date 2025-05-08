import { TestBed } from '@angular/core/testing';

import { RefFormationService } from './ref-formation.service';

describe('RefFormationService', () => {
  let service: RefFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
