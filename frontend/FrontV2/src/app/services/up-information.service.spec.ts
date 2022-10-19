import { TestBed } from '@angular/core/testing';

import { UpInformationService } from './up-information.service';

describe('UpInformationService', () => {
  let service: UpInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
