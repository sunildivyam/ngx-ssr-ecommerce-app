import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageConfigRoutingModule } from './manage-config-routing.module';
import { ManageConfigPageComponent } from './components/manage-config-page/manage-config-page.component';


@NgModule({
  declarations: [
    ManageConfigPageComponent
  ],
  imports: [
    CommonModule,
    ManageConfigRoutingModule
  ]
})
export class ManageConfigModule { }
