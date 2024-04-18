import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShopLandingPageComponent } from './components/shop-landing-page/shop-landing-page.component';
import { ShopLevel1PageComponent } from './components/shop-level1-page/shop-level1-page.component';
import {
  CategoryThumbModule,
  DEFAULT_CATEGORY_IMAGE_PROVIDER
} from '@annuadvent/ngx-ecommerce/category-thumb';
import { CategoryThumbListModule } from '@annuadvent/ngx-ecommerce/category-thumb-list';
import { DEFAULT_CATEGORY_IMAGE, DEFAULT_PRODUCT_IMAGE } from '../app-core';
import { DEFAULT_PRODUCT_IMAGE_PROVIDER } from '@annuadvent/ngx-ecommerce/product-thumb';
import { HelpersCategoriesModule } from '@annuadvent/ngx-core/helpers-categories';
import { ProductThumbListModule } from '@annuadvent/ngx-ecommerce/product-thumb-list';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopLandingPageComponent,
    ShopLevel1PageComponent
  ],
  providers: [
    {
      provide: DEFAULT_CATEGORY_IMAGE_PROVIDER,
      useValue: DEFAULT_CATEGORY_IMAGE
    },
    {
      provide: DEFAULT_PRODUCT_IMAGE_PROVIDER,
      useValue: DEFAULT_PRODUCT_IMAGE
    }
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CategoryThumbModule,
    CategoryThumbListModule,
    ProductThumbListModule,
    HelpersCategoriesModule
  ]
})
export class ShopModule {}
