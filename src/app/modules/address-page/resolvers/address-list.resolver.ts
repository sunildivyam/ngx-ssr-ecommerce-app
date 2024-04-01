import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AddressPageService } from '../services/address-page.service';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';

export const addressListResolver: ResolveFn<Array<Address>> = (
  route,
  state
) => {
  return inject(AddressPageService).getList();
};
