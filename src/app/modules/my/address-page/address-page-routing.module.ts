import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListPageComponent } from './components/address-list-page/address-list-page.component';
import { AddressManagePageComponent } from './components/address-manage-page/address-manage-page.component';
import { addressListResolver } from './resolvers/address-list.resolver';
import { addressResolver } from './resolvers/address.resolver';

const routes: Routes = [
  {
    path: '',
    component: AddressListPageComponent,
    resolve: { list: addressListResolver }
  },
  {
    path: 'add',
    component: AddressManagePageComponent
  },
  {
    path: 'edit/:id',
    component: AddressManagePageComponent,
    resolve: { address: addressResolver }
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
export class AddressPageRoutingModule {}
