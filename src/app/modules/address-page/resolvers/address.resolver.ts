import { ResolveFn } from '@angular/router';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import { AddressPageService } from '../services/address-page.service';
import { inject } from '@angular/core';

export const addressResolver: ResolveFn<Address> = async (route, state) => {
  const id = route.params?.id;

  try {
    const list = await inject(AddressPageService).getList();
    return list.find((address) => address.id === id);
  } catch (error) {
    return null;
  }
};
