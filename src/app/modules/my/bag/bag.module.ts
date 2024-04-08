import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagPageComponent } from './components/bag-page/bag-page.component';


@NgModule({
  declarations: [
    BagPageComponent
  ],
  imports: [
    CommonModule,
    BagRoutingModule
  ]
})
export class BagModule { }
