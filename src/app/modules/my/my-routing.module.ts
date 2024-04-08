import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'addresses',
    loadChildren: () =>
      import('./address-page/address-page.module').then(
        (m) => m.AddressPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      )
  },
  {
    path: 'bag',
    loadChildren: () => import('./bag/bag.module').then((m) => m.BagModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule)
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistModule)
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
export class MyRoutingModule {}
