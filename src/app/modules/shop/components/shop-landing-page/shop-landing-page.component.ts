import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-shop-landing-page',
  templateUrl: './shop-landing-page.component.html',
  styleUrls: ['./shop-landing-page.component.scss']
})
export class ShopLandingPageComponent implements OnDestroy {
  private $routeEnd: Subscription = null;
  isCatL1: boolean = true;
  paramCategories: Array<Category> = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe((data) => {
      this.paramCategories = data?.categories;
      this.isCatL1 =
        this.paramCategories?.length === 1 &&
        this.paramCategories[0].level === 1;
    });

    this.$routeEnd = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.$routeEnd && this.$routeEnd.unsubscribe();
  }
}
