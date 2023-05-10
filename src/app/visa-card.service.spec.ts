import { TestBed } from '@angular/core/testing';

import { VisaCardService } from './visa-card.service';

describe('VisaCardService', () => {
  let service: VisaCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
