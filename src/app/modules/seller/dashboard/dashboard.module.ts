import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule, CardModule]
})
export class DashboardModule {}
