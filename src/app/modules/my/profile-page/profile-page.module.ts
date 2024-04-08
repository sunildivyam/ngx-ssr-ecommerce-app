import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { ErrorModule } from '@annuadvent/ngx-common-ui/error';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageService } from './services/profile-page.service';

@NgModule({
  declarations: [ProfilePageComponent],
  providers: [ProfilePageService],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormModule,
    SpinnerModule,
    ErrorModule,
    UtilsModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule {}
