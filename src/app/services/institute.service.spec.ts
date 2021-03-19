import { TestBed } from '@angular/core/testing';

import { IntituteService } from './intitute.service';

describe('IntituteService', () => {
  let service: IntituteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntituteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
