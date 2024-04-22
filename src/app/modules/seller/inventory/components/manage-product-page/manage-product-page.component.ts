import { Component } from '@angular/core';
import { APP_STATE_KEYS, AppStateService } from '../../../../app-core';
import {
  InventoryService,
  ManageProductService
} from '@annuadvent/ngx-ecommerce/manage-product';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-manage-product-page',
  templateUrl: './manage-product-page.component.html',
  styleUrls: ['./manage-product-page.component.scss']
})
export class ManageProductPageComponent {
  constructor(
    private appStateService: AppStateService,
    private mpS: ManageProductService,
    private ipS: InventoryService,
    private route: ActivatedRoute
  ) {
    this.appStateService.appState.subscribe((state) => {
      this.mpS.categories = state[APP_STATE_KEYS.liveCategories] || [];
    });

    this.route.params.subscribe(async (params: Params) => {
      const id = params['id'];
      if (id) {
        this.mpS.product = (await this.ipS.getProduct(id)) || new Product();
      } else {
        this.mpS.product = new Product();
      }
    });

    this.mpS.product.subscribe((product) => {
      product?.id && this.ipS.updateOrAddProduct(product);
    });
  }
}
