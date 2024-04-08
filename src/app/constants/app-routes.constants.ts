import { Route, Routes } from '@angular/router';
import { LoginComponent } from '../modules/app-core';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Sign In' }
  },
  {
    path: 'my',
    loadChildren: () =>
      import('../modules/my/my.module').then((m) => m.MyModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('../modules/seller/seller.module').then((m) => m.SellerModule)
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('../modules/shop/shop.module').then((m) => m.ShopModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
