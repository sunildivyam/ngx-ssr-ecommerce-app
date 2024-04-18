import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent {
  myProducts: Array<Product> = [];

  constructor(private router: Router) {}

  public onAddClick(event: any): void {
    this.router.navigateByUrl('/seller/inventory/manage-product/add');
  }
}
