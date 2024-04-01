import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable, lastValueFrom, map } from 'rxjs';
import { URLS } from '../constants/api-urls.constants';

@Injectable({
  providedIn: 'root'
})
export class AddressPageService {
  private $list = new BehaviorSubject<Array<Address>>([]);
  private $defaultAddress = new BehaviorSubject<Address>(null);

  constructor(private http: HttpClient) {}

  public get list(): Observable<Array<Address>> {
    return this.$list.asObservable();
  }

  public get defaultAddress(): Observable<Address> {
    return this.$defaultAddress.asObservable();
  }

  public set defaultAddress(v: string | Address) {
    if (v instanceof Object) {
      this.$defaultAddress.next(
        this.$list.value.find((adr) => adr.id === v.id) || null
      );
    } else if (typeof v === 'string') {
      this.$defaultAddress.next(
        this.$list.value.find((adr) => adr.id === v) || null
      );
    } else {
      this.$defaultAddress.next(null);
    }
  }

  public async getList(): Promise<Array<Address>> {
    // List from cache
    if (this.$list.value && this.$list.value.length) {
      return this.$list.value;
    }

    // list from database
    try {
      const list: any = await lastValueFrom(this.http.get(URLS.LIST));

      const addresses = list.map((address) => new Address(address));
      this.$list.next(addresses);
      return addresses;
    } catch (error: any) {
      this.$list.next([]);
      throw error;
    }
  }

  public async addAddress(address: Address): Promise<Address> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.ADD}`, address)
      );
      const addressR = new Address(result);
      const newList = [addressR, ...this.$list.value];
      this.$list.next(newList);
      return addressR;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateAddress(address: Address): Promise<Address> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.UPDATE}/${address.id}`, address)
      );
      const addressR = new Address(result);
      const newList = this.$list.value.map((adr) =>
        adr.id === addressR.id ? addressR : adr
      );
      this.$list.next(newList);
      return addressR;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteAddress(id: string): Promise<boolean> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.DELETE}/${id}`, {})
      );
      const newList = this.$list.value.filter((adr) => adr.id !== id);
      this.$list.next(newList);

      // Check if deleted address was the default address too. Reset Default address
      if (this.$defaultAddress.value?.id === id) {
        this.$defaultAddress.next(null);
      }

      return result.success;
    } catch (error: any) {
      throw error;
    }
  }
}
