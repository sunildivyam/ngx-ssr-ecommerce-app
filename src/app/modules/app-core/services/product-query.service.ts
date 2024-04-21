import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { API_URLS } from '../../../constants/api-urls.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductQueryService {
  private $liveProducts = new BehaviorSubject<Array<Product>>([]);
  constructor(private http: HttpClient) {}

  private addToCache(products: Array<Product>): void {
    const pIds = this.$liveProducts.value.map((p) => p.id);
    const toAddPs = products.filter((p) => !pIds.includes(p.id));

    this.$liveProducts.next([...this.$liveProducts.value, ...toAddPs]);
  }

  public async getProducts(
    categoryIds: Array<string>,
    force: boolean = false
  ): Promise<Array<Product>> {
    // get from database
    if (!force && this.$liveProducts.value?.length) {
      return this.$liveProducts.value;
    }

    try {
      const productR: any = await lastValueFrom(
        this.http.get(`${API_URLS.PRODUCTS.LIST}?categoryIds=${categoryIds}`)
      );

      const products = productR.map((cat) => new Product(cat));

      this.addToCache(products);
      return products;
    } catch (error: any) {
      throw error;
    }
  }

  public async getProduct(
    id: string,
    force: boolean = false
  ): Promise<Product> {
    // get from database
    const p = this.$liveProducts.value.find((p) => p.id === id);

    if (!force && p) {
      return p;
    }

    try {
      const productR: any = await lastValueFrom(
        this.http.get(`${API_URLS.PRODUCTS.LIST}/${id}`)
      );

      const product = new Product(productR);

      this.addToCache([product]);

      return product;
    } catch (error: any) {
      throw error;
    }
  }
}
