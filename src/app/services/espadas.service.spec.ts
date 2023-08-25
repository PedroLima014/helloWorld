import { TestBed } from '@angular/core/testing';

import { EspadasService } from './espadas.service';

describe('EspadasService', () => {
  let service: EspadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
