import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShopLandingPageComponent } from './components/shop-landing-page/shop-landing-page.component';
import { ShopLevel1PageComponent } from './components/shop-level1-page/shop-level1-page.component';
import { CategoryThumbModule } from '@annuadvent/ngx-ecommerce/category-thumb';
import { CategoryThumbListModule } from '@annuadvent/ngx-ecommerce/category-thumb-list';
import { HelpersCategoriesModule } from '@annuadvent/ngx-core/helpers-categories';
import { ProductThumbListModule } from '@annuadvent/ngx-ecommerce/product-thumb-list';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductDetailModule } from '@annuadvent/ngx-ecommerce/product-detail';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopLandingPageComponent,
    ShopLevel1PageComponent,
    ProductPageComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CategoryThumbModule,
    CategoryThumbListModule,
    ProductThumbListModule,
    ProductDetailModule,
    HelpersCategoriesModule,
    ErrorModule,
    SpinnerModule
  ]
})
export class ShopModule {}
