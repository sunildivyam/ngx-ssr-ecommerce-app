import { Component } from '@angular/core';
import { APP_STATE_KEYS, AppStateService } from '../../../../app-core';
import { ManageProductService } from '@annuadvent/ngx-ecommerce/manage-product';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params
} from '@angular/router';
import { InventoryPageService } from '../../services/inventory-page.service';
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
    private ipS: InventoryPageService,
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
