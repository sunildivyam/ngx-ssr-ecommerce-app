import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagPageComponent } from './components/bag-page/bag-page.component';
import { CartModule } from '@annuadvent/ngx-ecommerce/cart';

@NgModule({
  declarations: [BagPageComponent],
  imports: [CommonModule, BagRoutingModule, CartModule]
})
export class BagModule {}
