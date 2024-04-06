import { Component, OnInit } from '@angular/core';
import {
  FormConfigGroup,
  FormControlValue
} from '@annuadvent/ngx-core/helpers-forms';
import { ProfilePageService } from '../../services/profile-page.service';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';
import { Subscription, filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Error } from '@annuadvent/ngx-common-ui/error';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileParams: FormConfigGroup;
  profile = new Profile();
  loading: boolean = false;
  error: Error = null;
  navigationEndSubscription: Subscription;
  isEditPage: boolean = false;

  constructor(
    private gcService: GlobalConfigService,
    private profilePageService: ProfilePageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Subscribe Profile Params
    this.gcService.config.subscribe(
      () =>
        (this.profileParams = this.gcService.getValue(
          GlobalConfigParamsEnum.userProfileParams
        ))
    );

    // Subscribe profile from page data
    this.route.data.subscribe((data) => {
      this.profile = data.profile || new Profile();

      // Profile already exists or need to be created a new one for the user
      this.isEditPage = !!this.profile.id;
    });

    this.navigationEndSubscription = this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe(() => {
        // this.setPageMeta()
      });
  }

  ngOnInit(): void {}

  private navigateBack(): void {
    const returnUrl = this.route.snapshot.queryParams?.returnUrl || '';
    if (returnUrl) {
      this.router.navigate([returnUrl], { relativeTo: this.route.root });
    } else {
      const backUrl = './';
      this.router.navigate([backUrl], { relativeTo: this.route });
    }
  }

  public onCancel(event: any): void {
    this.navigateBack();
  }

  public onSubmit(value: Profile): void {
    this.loading = true;
    this.error = null;
    // Adds profile for user if does not exist already, else would just update
    let saveFn = this.isEditPage
      ? this.profilePageService.updateProfile
      : this.profilePageService.addProfile;
    saveFn = saveFn.bind(this.profilePageService);

    saveFn(value.id, value)
      .then((profile) => {
        this.profile = profile;
        this.loading = false;
        this.navigateBack();
      })
      .catch((error) => {
        this.loading = false;
        this.error = { code: error.code, message: error.message };
      });
  }

  public onActionBtn(event: FormControlValue): void {
    switch (event.key) {
      case 'photoUrl':
        // Show Image modal to change Image
        break;
      case 'defaultAddressId':
        // Show Address List and set default address
        break;
      default:
    }
  }
}
