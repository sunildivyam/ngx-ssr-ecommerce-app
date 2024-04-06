import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { profileResolver } from './resolvers/profile.resolver';
import { IsLoggedInGuard } from '@annuadvent/ngx-tools/fire-auth';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    resolve: { profile: profileResolver },
    runGuardsAndResolvers: 'always',
    canActivate: [IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
