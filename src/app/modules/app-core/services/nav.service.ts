import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import { AppState } from '../interfaces/app-state.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { NestedNavItem } from '@annuadvent/ngx-common-ui/nested-nav';
import { APP_STATE_KEYS } from '../constants/app-state.constants';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { GlobalConfigParamsEnum } from '@annuadvent/ngx-core/global-config';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private $navItems = new BehaviorSubject<Array<NestedNavItem>>([]);

  public get navItems(): Observable<Array<NestedNavItem>> {
    return this.$navItems.asObservable();
  }

  constructor(
    private appStateService: AppStateService,
    private utilsService: UtilsService
  ) {
    this.appStateService.appState.subscribe((state: AppState) => {
      // Subscribe appState to get RemoteConfig (mainNav) param and live categories
      const catIds = this.utilsService.getRemoteConfigValue(
        state[APP_STATE_KEYS.globalConfig],
        GlobalConfigParamsEnum.mainNav
      );

      const cats = state[APP_STATE_KEYS.liveCategories];

      const navItems = this.buildNavsFromCategories(cats, catIds);
      this.$navItems.next(navItems);
    });
  }

  private buildNavsFromCategories(
    cats: Array<Category>,
    catIds: string
  ): Array<NestedNavItem> {
    if (!cats?.length || !catIds) return [];
    const ids = catIds.split(', ');
    const pCats = ids.map((id) => {
      const cat = cats.find((cat) => cat.id === id);
      if (!cat) {
        throw new Error(
          `nav item ${id} does not match with any of the category.`
        );
      }

      return cat;
    });

    const navItems = pCats.map((cat) => this.getNavItem(cat, cats));

    return navItems;
  }

  private getNavItem(
    cat: Category,
    cats: Array<Category>,
    parentNav: NestedNavItem = null
  ): NestedNavItem {
    const navItem: NestedNavItem = {
      title: cat.title,
      href: parentNav?.href ? [...parentNav.href, cat.id] : ['/shop', cat.id]
    };

    const children = cats.filter((c) => c.parents?.includes(cat.id));
    if (children) {
      navItem.children = children.map((c) => this.getNavItem(c, cats, navItem));
    }

    return navItem;
  }
}
