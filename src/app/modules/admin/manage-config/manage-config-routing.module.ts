import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageConfigPageComponent } from './components/manage-config-page/manage-config-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManageConfigPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageConfigRoutingModule {}
