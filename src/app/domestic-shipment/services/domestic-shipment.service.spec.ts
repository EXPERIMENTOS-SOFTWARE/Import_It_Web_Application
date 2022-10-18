import { TestBed } from '@angular/core/testing';

import { DomesticShipmentService } from './domestic-shipment.service';

describe('DomesticShipmentService', () => {
  let service: DomesticShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomesticShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
