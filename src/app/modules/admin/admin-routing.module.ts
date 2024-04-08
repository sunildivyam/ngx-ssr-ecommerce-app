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
      import('./admin-dashboard-page/admin-dashboard-page.module').then(
        (m) => m.AdminDashboardPageModule
      )
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./manage-categories-page/manage-categories-page.module').then(
        (m) => m.ManageCategoriesPageModule
      )
  },
  {
    path: 'manage-config',
    loadChildren: () =>
      import('./manage-config/manage-config.module').then(
        (m) => m.ManageConfigModule
      )
  },
  {
    path: 'manage-pages',
    loadChildren: () =>
      import('./manage-pages/manage-pages.module').then(
        (m) => m.ManagePagesModule
      )
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule)
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
export class AdminRoutingModule {}
