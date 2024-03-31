import { Component } from '@angular/core';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-address-manage-page',
  templateUrl: './address-manage-page.component.html',
  styleUrls: ['./address-manage-page.component.scss'],
})
export class AddressManagePageComponent {
  public onAddressChange(value: Address): void {}

  public OnDefaultAddressChange(isDefault: boolean): void {}
}
