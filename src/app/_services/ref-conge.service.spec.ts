import { TestBed } from '@angular/core/testing';

import { RefCongeService } from './ref-conge.service';

describe('RefCongeService', () => {
  let service: RefCongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefCongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
