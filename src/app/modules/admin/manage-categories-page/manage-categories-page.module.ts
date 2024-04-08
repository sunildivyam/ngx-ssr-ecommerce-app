import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManageCategoriesPageRoutingModule } from "./manage-categories-page-routing.module";
import { ManageCategoriesPageComponent } from "./components/manage-categories-page/manage-categories-page.component";
import { ErrorModule } from "@annuadvent/ngx-common-ui/error";

import { HttpClientModule } from "@angular/common/http";
import { CategoriesModule } from "@annuadvent/ngx-common-ui/categories";

@NgModule({
  declarations: [ManageCategoriesPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ManageCategoriesPageRoutingModule,
    ErrorModule,
    CategoriesModule,
  ],
})
export class ManageCategoriesPageModule {}
