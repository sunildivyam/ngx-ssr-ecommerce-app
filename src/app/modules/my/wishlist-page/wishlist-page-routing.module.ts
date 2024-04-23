import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistPageComponent
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
export class WishlistPageRoutingModule {}
