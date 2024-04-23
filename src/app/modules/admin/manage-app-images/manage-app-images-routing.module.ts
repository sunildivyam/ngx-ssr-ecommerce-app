import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAppImagesPageComponent } from './components/manage-app-images-page/manage-app-images-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManageAppImagesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAppImagesRoutingModule {}
