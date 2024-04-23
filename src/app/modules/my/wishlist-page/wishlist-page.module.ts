import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistPageRoutingModule } from './wishlist-page-routing.module';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { WishlistModule } from '@annuadvent/ngx-ecommerce/wishlist';

@NgModule({
  declarations: [WishlistPageComponent],
  imports: [CommonModule, WishlistPageRoutingModule, WishlistModule]
})
export class WishlistPageModule {}
