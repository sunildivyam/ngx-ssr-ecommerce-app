import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListPageComponent } from './components/address-list-page/address-list-page.component';
import { AddressManagePageComponent } from './components/address-manage-page/address-manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddressListPageComponent,
  },
  {
    path: 'add',
    component: AddressManagePageComponent,
  },
  {
    path: 'edit/:id',
    component: AddressManagePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressPageRoutingModule {}
