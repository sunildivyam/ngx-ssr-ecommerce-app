import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCategoriesPageComponent } from './components/manage-categories-page/manage-categories-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManageCategoriesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCategoriesPageRoutingModule {}
