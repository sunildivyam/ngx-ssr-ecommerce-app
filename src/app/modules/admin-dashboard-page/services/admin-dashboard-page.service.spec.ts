import { TestBed } from '@angular/core/testing';

import { AdminDashboardPageService } from './admin-dashboard-page.service';

describe('AdminDashboardPageService', () => {
  let service: AdminDashboardPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashboardPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
