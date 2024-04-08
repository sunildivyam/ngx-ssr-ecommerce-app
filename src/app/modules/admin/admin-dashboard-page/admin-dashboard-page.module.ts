import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-page-routing.module';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';

@NgModule({
  declarations: [AdminDashboardPageComponent],
  imports: [CommonModule, AdminDashboardPageRoutingModule, CardModule]
})
export class AdminDashboardPageModule {}
