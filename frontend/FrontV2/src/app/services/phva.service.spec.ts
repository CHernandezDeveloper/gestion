import { TestBed } from '@angular/core/testing';

import { PhvaService } from './phva.service';

describe('PhvaService', () => {
  let service: PhvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
