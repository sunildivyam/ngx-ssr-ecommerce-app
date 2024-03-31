import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressPageRoutingModule } from './address-page-routing.module';
import { AddressListPageComponent } from './components/address-list-page/address-list-page.component';
import { AddressManagePageComponent } from './components/address-manage-page/address-manage-page.component';
import { AddressModule } from '@annuadvent/ngx-ecommerce/address';

@NgModule({
  declarations: [AddressListPageComponent, AddressManagePageComponent],
  imports: [CommonModule, AddressPageRoutingModule, AddressModule],
  exports: [AddressListPageComponent, AddressManagePageComponent],
})
export class AddressPageModule {}
