import { TestBed } from '@angular/core/testing';

import { DirectionregisterService } from './directionregister.service';

describe('DirectionregisterService', () => {
  let service: DirectionregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
