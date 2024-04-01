import { Component } from '@angular/core';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import { AddressPageService } from '../../services/address-page.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Error } from '@annuadvent/ngx-common-ui/error';
import { Subscription, filter } from 'rxjs';

/**
 * Add/Edit your Address
 * 1) On Submit, redirects back to the redirectUrl, if given else back to Address List Page by default.
 * 2) Manage Address from any other Page, just pass redirectUrl, to return back.
 */
@Component({
  selector: 'app-address-manage-page',
  templateUrl: './address-manage-page.component.html',
  styleUrls: ['./address-manage-page.component.scss']
})
export class AddressManagePageComponent {
  address: Address = new Address();
  isDefault: boolean = false;
  defaultAddress: Address = null;
  loading: boolean = false;
  error: Error = null;
  navigationEndSubscription: Subscription;
  instructionsOnly: false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adr: AddressPageService
  ) {
    this.adr.defaultAddress.subscribe(
      (address) => (this.defaultAddress = address)
    );

    this.route.data.subscribe((data) => {
      if (this.isEditPage) {
        this.instructionsOnly = this.route.snapshot.queryParams?.instructions;
        this.address = data.address;
        this.isDefault = this.address?.id === this.defaultAddress?.id;

        if (!this.address) {
          this.error = {
            code: 'NOT_FOUND',
            message:
              'Address does not exist. Or something went wrong. Try again.'
          };
        }
      } else {
        this.address = new Address();
      }
    });

    this.navigationEndSubscription = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        // this.setPageMeta()
      });
  }

  public get isEditPage(): boolean {
    return !!this.route.snapshot.url.find((url) => url.path === 'edit');
  }

  private navigateBack(): void {
    const returnUrl = this.route.snapshot.queryParams?.returnUrl || '';
    if (returnUrl) {
      this.router.navigate([returnUrl], { relativeTo: this.route.root });
    } else {
      const backUrl = this.isEditPage ? '../../' : '../';
      this.router.navigate([backUrl], { relativeTo: this.route });
    }
  }
  public onAddressChange(value: Address): void {}

  public onSubmitClicked(value: Address): void {
    // Check if ADD / EDIT
    const id = this.route.snapshot.params?.id;
    this.loading = true;
    this.error = null;

    if (!id) {
      // Add Address
      this.adr
        .addAddress(value)
        .then((address) => {
          this.address = address;
          if (this.isDefault) {
            this.adr.defaultAddress = this.address;
          }
          this.navigateBack();
        })
        .catch((error) => {
          this.loading = false;
          this.error = { code: error.code, message: error.message };
        });
    } else {
      // EDIT Address
      this.adr
        .updateAddress(value)
        .then((address) => {
          this.address = address;
          if (this.isDefault) {
            this.adr.defaultAddress = this.address;
          }
          this.navigateBack();
        })
        .catch((error) => {
          this.loading = false;
          this.error = { code: error.code, message: error.message };
        });
    }
  }

  public onCancelClicked(event: any): void {
    this.navigateBack();
  }

  public OnDefaultAddressChange(isDefault: boolean): void {
    this.isDefault = isDefault;
  }
}
