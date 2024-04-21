import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { APP_STATE_KEYS, AppStateService } from '../../../app-core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit, OnChanges {
  @Input() categories: Array<Category> = [];
  productList: Array<Product> = [];

  constructor(
    private route: ActivatedRoute,
    private appStateService: AppStateService
  ) {
    // Subscribe to appState (productListForShop)
    this.appStateService.appState.subscribe((state) => {
      this.productList =
        state[
          this.appStateService.getCustomKeyName(
            APP_STATE_KEYS.productListForShop,
            {
              categoryIds: this.categories.map((cat) => cat.id)
            }
          )
        ];
    });
  }

  private setProductList(): void {
    this.appStateService.setState(APP_STATE_KEYS.productListForShop, {
      categoryIds: this.categories.map((cat) => cat.id)
    });
  }

  ngOnInit(): void {
    // this.setProductList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setProductList();
  }
}
