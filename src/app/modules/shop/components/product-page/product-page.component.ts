import { Component } from '@angular/core';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { ProductQueryService } from '../../../app-core/services/product-query.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product: Product = null;
  loading: boolean = false;
  error: AppError = null;

  constructor(
    private productQueryService: ProductQueryService,
    private route: ActivatedRoute
  ) {
    // Subscribe Route param change (id - productId)
    this.route.params.subscribe(async (params) => {
      this.loading = true;
      this.error = null;
      try {
        this.product = await this.productQueryService.getProduct(params?.id);
        this.loading = false;
      } catch (error) {
        this.product = null;
        this.error = new AppError(error);
        this.loading = false;
      }
    });
  }
}
