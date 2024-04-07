import { TestBed } from '@angular/core/testing';

import { ManageCategoriesPageService } from './manage-categories-page.service';

describe('ManageCategoriesPageService', () => {
  let service: ManageCategoriesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCategoriesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
