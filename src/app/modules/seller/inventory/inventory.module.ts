import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { ProductThumbListModule } from '@annuadvent/ngx-ecommerce/product-thumb-list';
import { ManageProductPageComponent } from './components/manage-product-page/manage-product-page.component';
import { ManageProductModule } from '@annuadvent/ngx-ecommerce/manage-product';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InventoryPageComponent, ManageProductPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    InventoryRoutingModule,
    ProductThumbListModule,
    ManageProductModule
  ]
})
export class InventoryModule {}
