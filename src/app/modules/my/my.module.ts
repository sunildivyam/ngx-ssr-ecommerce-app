import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { ProfilePageModule } from './profile-page';
import { DashboardModule } from './dashboard';
import { AddressPageModule } from './address-page';
import { OrdersModule } from './orders/orders.module';
import { BagModule } from './bag/bag.module';
import { WishlistModule } from './wishlist/wishlist.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyRoutingModule,
    ProfilePageModule,
    DashboardModule,
    AddressPageModule,
    OrdersModule,
    BagModule,
    WishlistModule
  ]
})
export class MyModule {}
