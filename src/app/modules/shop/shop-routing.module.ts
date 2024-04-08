import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLandingPageComponent } from './components/shop-landing-page/shop-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShopLandingPageComponent
  },
  {
    path: ':l1',
    component: ShopLandingPageComponent // Only for L1 route, if cat's level=1, show L1CatHomePage
  },
  {
    path: ':l1/:l2',
    component: ShopLandingPageComponent
  },
  {
    path: ':l1/:l2/:l3',
    component: ShopLandingPageComponent
  },
  {
    path: ':l1/:l2/:l3/:l4',
    component: ShopLandingPageComponent
  },
  {
    path: ':l1/:l2/:l3/:l4/:l5',
    component: ShopLandingPageComponent
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
export class ShopRoutingModule {}
