import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';


@NgModule({
  declarations: [
    WishlistPageComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
