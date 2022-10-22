import { TestBed } from '@angular/core/testing';

import { UrlorderService } from './urlorder.service';

describe('UrlorderService', () => {
  let service: UrlorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
