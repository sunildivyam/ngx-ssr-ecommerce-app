import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePagesPageComponent } from './components/manage-pages-page/manage-pages-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePagesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePagesRoutingModule {}
