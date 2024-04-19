import { TestBed } from '@angular/core/testing';

import { InventoryPageService } from './inventory-page.service';

describe('InventoryPageService', () => {
  let service: InventoryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
