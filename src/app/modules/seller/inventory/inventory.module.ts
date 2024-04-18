import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { ProductThumbListModule } from '@annuadvent/ngx-ecommerce/product-thumb-list';
import { ManageProductPageComponent } from './components/manage-product-page/manage-product-page.component';
import {
  MANAGE_PRODUCT_API_URLS_PROVIDER,
  ManageProductModule
} from '@annuadvent/ngx-ecommerce/manage-product';
import { API_URLS } from './constants/api-urls.constants';

@NgModule({
  declarations: [InventoryPageComponent, ManageProductPageComponent],
  providers: [
    {
      provide: MANAGE_PRODUCT_API_URLS_PROVIDER,
      useValue: API_URLS
    }
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ProductThumbListModule,
    ManageProductModule
  ]
})
export class InventoryModule {}
