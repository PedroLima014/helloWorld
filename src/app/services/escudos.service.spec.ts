import { TestBed } from '@angular/core/testing';

import { EscudosService } from './escudos.service';

describe('EscudosService', () => {
  let service: EscudosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscudosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
