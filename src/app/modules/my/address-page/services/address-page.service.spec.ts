import { TestBed } from '@angular/core/testing';

import { AddressPageService } from './address-page.service';

describe('AddressPageService', () => {
  let service: AddressPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
