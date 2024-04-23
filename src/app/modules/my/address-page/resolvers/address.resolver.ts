import { ResolveFn } from '@angular/router';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import { AddressService } from '@annuadvent/ngx-ecommerce/address';
import { inject } from '@angular/core';

export const addressResolver: ResolveFn<Address> = async (route, state) => {
  const id = route.params?.id;

  try {
    const list = await inject(AddressService).getList();
    return list.find((address) => address.id === id);
  } catch (error) {
    return null;
  }
};
