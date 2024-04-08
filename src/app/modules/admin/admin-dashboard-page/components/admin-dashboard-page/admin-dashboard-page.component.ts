import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.scss']
})
export class AdminDashboardPageComponent {
  routeEndEvent: Subscription;

  constructor(public route: ActivatedRoute, private router: Router) {
    this.routeEndEvent = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        // TDOD: Set page meta
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeEndEvent.unsubscribe();
  }

  public onOutletActivated(): void {}
}
