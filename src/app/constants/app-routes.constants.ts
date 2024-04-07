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
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/dashboard').then((m) => m.DashboardModule)
      },
      {
        path: 'addresses',
        loadChildren: () =>
          import('../modules/address-page').then((m) => m.AddressPageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../modules/profile-page').then((m) => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/admin-dashboard-page').then(
            (m) => m.AdminDashboardPageModule
          )
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../modules/manage-categories-page').then(
            (m) => m.ManageCategoriesPageModule
          )
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
