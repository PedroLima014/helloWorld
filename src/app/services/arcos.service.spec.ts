import { TestBed } from '@angular/core/testing';

import { ArcosService } from './arcos.service';

describe('ArcosService', () => {
  let service: ArcosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
