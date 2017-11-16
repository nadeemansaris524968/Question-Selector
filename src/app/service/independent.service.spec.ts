import { TestBed, inject } from '@angular/core/testing';

import { IndependentService } from './independent.service';

describe('IndependentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndependentService]
    });
  });

  it('should be created', inject([IndependentService], (service: IndependentService) => {
    expect(service).toBeTruthy();
  }));
});
