import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageModule } from './admin-dashboard-page';
import { ManageCategoriesPageModule } from './manage-categories-page';
import { OrdersModule } from './orders/orders.module';
import { ManageConfigModule } from './manage-config/manage-config.module';
import { ManagePagesModule } from './manage-pages/manage-pages.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboardPageModule,
    ManageCategoriesPageModule,
    OrdersModule,
    ManageConfigModule,
    ManagePagesModule
  ]
})
export class AdminModule {}
