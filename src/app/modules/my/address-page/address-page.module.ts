import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressPageRoutingModule } from './address-page-routing.module';
import { AddressListPageComponent } from './components/address-list-page/address-list-page.component';
import { AddressManagePageComponent } from './components/address-manage-page/address-manage-page.component';
import {
  AddressModule
  // AddressService
} from '@annuadvent/ngx-ecommerce/address';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';

@NgModule({
  declarations: [AddressListPageComponent, AddressManagePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AddressPageRoutingModule,
    AddressModule,
    SpinnerModule,
    ErrorModule
  ],
  // providers: [AddressService],
  exports: [AddressListPageComponent, AddressManagePageComponent]
})
export class AddressPageModule {}
