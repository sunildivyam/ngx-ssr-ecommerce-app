import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePagesRoutingModule } from './manage-pages-routing.module';
import { ManagePagesPageComponent } from './components/manage-pages-page/manage-pages-page.component';


@NgModule({
  declarations: [
    ManagePagesPageComponent
  ],
  imports: [
    CommonModule,
    ManagePagesRoutingModule
  ]
})
export class ManagePagesModule { }
