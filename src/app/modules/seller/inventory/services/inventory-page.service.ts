import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { API_URLS } from '../constants/api-urls.constants';

@Injectable({
  providedIn: 'root'
})
export class InventoryPageService {
  private $myProducts = new BehaviorSubject<Array<Product>>([]);

  constructor(private http: HttpClient) {}

  public get myProducts(): Observable<Array<Product>> {
    return this.$myProducts.asObservable();
  }

  public async getProducts(force: boolean = false): Promise<Array<Product>> {
    // get from database
    if (!force && this.$myProducts.value?.length) {
      return this.$myProducts.value;
    }

    try {
      const productR: any = await lastValueFrom(
        this.http.get(`${API_URLS.MY_ALL}`)
      );

      const products = productR.map((p) => new Product(p));

      this.$myProducts.next(products);
      return products;
    } catch (error: any) {
      this.$myProducts.next([]);
      throw error;
    }
  }

  public async getProduct(id: string): Promise<Product> {
    // get from database
    if (!this.$myProducts.value?.length) {
      try {
        const pS = (await this.getProducts(true)) || [];
        return pS.find((p) => p.id === id);
      } catch (error) {
        throw error;
      }
    } else {
      return this.$myProducts.value.find((p) => p.id === id);
    }
  }

  public updateOrAddProduct(product: Product): void {
    let exists = false;

    const updatedList = this.$myProducts.value.map((p) => {
      if (p.id === product.id) {
        exists = true;
        return product;
      } else {
        return p;
      }
    });

    this.$myProducts.next(exists ? updatedList : [product, ...updatedList]);
  }
}
