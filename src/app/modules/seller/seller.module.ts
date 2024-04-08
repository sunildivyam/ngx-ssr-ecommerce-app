import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SellerRoutingModule,
    DashboardModule,
    OrdersModule,
    InventoryModule,
    ProfileModule
  ]
})
export class SellerModule { }
