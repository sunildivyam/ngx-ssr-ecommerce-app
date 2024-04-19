import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { InventoryPageService } from '../../services/inventory-page.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {
  myProducts: Array<Product> = [];

  constructor(private router: Router, public ipS: InventoryPageService) {}

  ngOnInit(): void {
    this.ipS.getProducts();
  }

  public onAddClick(event: any): void {
    this.router.navigateByUrl('/seller/inventory/manage-product/add');
  }
}
