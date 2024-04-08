import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ShopLandingPageComponent } from './components/shop-landing-page/shop-landing-page.component';
import { ShopLevel1PageComponent } from './components/shop-level1-page/shop-level1-page.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopLandingPageComponent,
    ShopLevel1PageComponent
  ],
  imports: [CommonModule, ShopRoutingModule]
})
export class ShopModule {}
