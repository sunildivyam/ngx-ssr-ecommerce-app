import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Error } from '@annuadvent/ngx-common-ui/error';
import { Subscription, filter } from 'rxjs';
import { ManageCategoriesPageService } from '../../services/manage-categories-page.service';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Component({
  selector: 'app-manage-categories-page',
  templateUrl: './manage-categories-page.component.html',
  styleUrls: ['./manage-categories-page.component.scss']
})
export class ManageCategoriesPageComponent {
  routeEndEvent: Subscription;
  loading: boolean = false;
  error: Error = null;
  categories: Array<Category> = [];
  levels: number = 0;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private pageService: ManageCategoriesPageService
  ) {
    // Subscribe categories
    this.pageService.categories.subscribe((cats) => {
      this.categories = cats;
    });

    // Subscribe max cat levels
    this.pageService.categoryMaxLevels.subscribe((levels) => {
      this.levels = levels;
    });

    this.routeEndEvent = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        this.fetchCategories();
        // TDOD: Set page meta
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeEndEvent.unsubscribe();
  }

  private async fetchCategories(force: boolean = false) {
    this.error = null;
    this.loading = true;

    try {
      await this.pageService.getCategories(force);
      this.loading = false;
    } catch (error) {
      this.error = {
        code: error.code,
        message: error.message
      };
      this.loading = false;
    }
  }

  public async onAdd(cat: Category) {
    this.error = null;
    this.loading = true;

    try {
      await this.pageService.addCategory(cat);
      this.loading = false;
    } catch (error) {
      this.error = {
        code: error.code,
        message: error.message
      };
      this.loading = false;
    }
  }
  public async onUpdate(cat: Category) {
    this.error = null;
    this.loading = true;

    try {
      await this.pageService.updateCategory(cat.id, cat);
      this.loading = false;
    } catch (error) {
      this.error = {
        code: error.code,
        message: error.message
      };
      this.loading = false;
    }
  }
  public async onDelete(cat: Category) {
    this.error = null;
    this.loading = true;

    try {
      await this.pageService.deleteCategory(cat.id);
      this.loading = false;
    } catch (error) {
      this.error = {
        code: error.code || error?.error?.code,
        message: error?.error?.message || error.message
      };
      if ((error.code || error?.error?.code) === 'REFERENCE EXISTS') {
        this.error.message =
          this.error.message +
          `(References - ${error?.error?.references?.join(',')}) `;
      }
      this.loading = false;
    }
  }

  public onReload(): void {
    this.fetchCategories(true);
  }
}
