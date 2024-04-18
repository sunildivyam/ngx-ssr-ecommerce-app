import { Component, Input } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  @Input() categories: Array<Category> = [];

  productList: Array<Product> = [];
}
