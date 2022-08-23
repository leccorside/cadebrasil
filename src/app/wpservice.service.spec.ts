import { TestBed } from '@angular/core/testing';

import { WpserviceService } from './wpservice.service';

describe('WpserviceService', () => {
  let service: WpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
