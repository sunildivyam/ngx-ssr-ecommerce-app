import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLandingPageComponent } from './components/shop-landing-page/shop-landing-page.component';
import { categoriesResolver } from './resolvers/categories.resolver';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShopLandingPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: ':l1',
    component: ShopLandingPageComponent, // Only for L1 route, if cat's level=1, show L1CatHomePage
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: ':l1/:l2',
    component: ShopLandingPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: ':l1/:l2/:l3',
    component: ShopLandingPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: ':l1/:l2/:l3/:l4',
    component: ShopLandingPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: ':l1/:l2/:l3/:l4/:l5',
    component: ShopLandingPageComponent,
    runGuardsAndResolvers: 'always',
    resolve: { categories: categoriesResolver }
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    runGuardsAndResolvers: 'always'
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
