import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAppImagesRoutingModule } from './manage-app-images-routing.module';
import { ManageAppImagesPageComponent } from './components/manage-app-images-page/manage-app-images-page.component';
import { AppImagesModule } from '@annuadvent/ngx-ecommerce/app-images';

@NgModule({
  declarations: [ManageAppImagesPageComponent],
  imports: [CommonModule, ManageAppImagesRoutingModule, AppImagesModule]
})
export class ManageAppImagesModule {}
