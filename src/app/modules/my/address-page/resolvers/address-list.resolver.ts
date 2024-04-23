import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AddressService } from '@annuadvent/ngx-ecommerce/address';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';

export const addressListResolver: ResolveFn<Array<Address>> = (
  route,
  state
) => {
  return inject(AddressService).getList();
};
