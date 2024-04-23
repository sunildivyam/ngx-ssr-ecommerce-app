import { Component, Input } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import {
  APP_STATE_KEYS,
  AppStateService,
  DEFAULT_CATEGORY_IMAGE
} from '../../../app-core';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';

@Component({
  selector: 'app-shop-level1-page',
  templateUrl: './shop-level1-page.component.html',
  styleUrls: ['./shop-level1-page.component.scss']
})
export class ShopLevel1PageComponent {
  @Input() value: Category = null;

  catList: Array<Category> = [];
  liveCategories: Array<Category> = [];
  defaultImage = DEFAULT_CATEGORY_IMAGE;

  constructor(
    private appStateService: AppStateService,
    private gcService: GlobalConfigService
  ) {
    this.appStateService.appState.subscribe((state) => {
      this.liveCategories = state[APP_STATE_KEYS.liveCategories] || [];
    });
  }
}
