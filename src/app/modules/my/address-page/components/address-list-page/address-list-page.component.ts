import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { AddressService } from '@annuadvent/ngx-ecommerce/address';

@Component({
  selector: 'app-address-list-page',
  templateUrl: './address-list-page.component.html',
  styleUrls: ['./address-list-page.component.scss']
})
export class AddressListPageComponent {
  list: Array<Address> = [];
  defaultAddress: Address = null;
  navigationEndSubscription: Subscription;
  loading = false;
  error: AppError = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adr: AddressService
  ) {
    this.adr.list.subscribe((list) => (this.list = list));

    this.adr.defaultAddress.subscribe(
      (address) => (this.defaultAddress = address)
    );

    this.navigationEndSubscription = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        // this.setPageMeta()
      });
  }

  public onAddClicked(event: any) {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  public onEditClicked(address: Address) {
    this.router.navigate(['./', 'edit', address.id], {
      relativeTo: this.route
    });
  }

  public onAddDeliveryInstructionsClicked(address: Address) {
    this.router.navigate(['./', 'edit', address.id], {
      relativeTo: this.route,
      queryParams: { instructions: true }
    });
  }

  public onDefaultClicked(address: Address) {
    this.adr.defaultAddress = address;
  }

  public async onDeleteClicked(address: Address) {
    this.loading = true;
    this.error = null;

    try {
      await this.adr.deleteAddress(address.id);
      this.loading = false;
    } catch (error) {
      this.error = { code: error.code, message: error.message };
      this.loading = false;
    }
  }
}
