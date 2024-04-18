import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { ManageProductPageComponent } from './components/manage-product-page/manage-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryPageComponent
  },
  {
    path: 'manage-product/add',
    component: ManageProductPageComponent
  },
  {
    path: 'manage-product/:id',
    component: ManageProductPageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}
