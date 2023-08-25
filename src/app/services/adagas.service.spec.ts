import { TestBed } from '@angular/core/testing';

import { AdagasService } from './adagas.service';

describe('AdagasService', () => {
  let service: AdagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
