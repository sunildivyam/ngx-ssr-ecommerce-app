import { Component, OnInit } from '@angular/core';
import {
  FormConfigGroup,
  FormControlValue
} from '@annuadvent/ngx-core/helpers-forms';
import { ProfilePageService } from '../../services/profile-page.service';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';
import { Subscription, filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppError } from '@annuadvent/ngx-common-ui/error';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { FireAuthService } from '@annuadvent/ngx-tools/fire-auth';
import { BASIC_PROFILE_FORM_PARAMS } from '../../constants/basic-profile-params.constant';
import { FireStorageImageService } from '@annuadvent/ngx-tools/fire-storage';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileParams: FormConfigGroup;
  basicProfileParams: FormConfigGroup = { ...BASIC_PROFILE_FORM_PARAMS };
  profile = new Profile();
  loading: boolean = false;
  error: AppError = null;
  navigationEndSubscription: Subscription;
  isEditPage: boolean = false;

  constructor(
    private gcService: GlobalConfigService,
    private profilePageService: ProfilePageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: FireAuthService
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
    // { ...value, id: this.authService.getCurrentUserId()}
    // Adds profile for user if does not exist already, else would just update
    if (this.isEditPage) {
      this.profilePageService
        .updateProfile(value.id, value)
        .then((profile) => {
          this.profile = profile;
          this.loading = false;
          this.navigateBack();
        })
        .catch((error) => {
          this.loading = false;
          this.error = { code: error.code, message: error.message };
        });
    } else {
      this.profilePageService
        .addProfile({ ...value, id: this.authService.getCurrentUserId() })
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
  }

  public onActionBtn(event: FormControlValue): void {
    const { key, value, control } = event;
    switch (key) {
      case 'photoUrlImage':
        control.valid && this.changeProfileImage(value, control);
        break;
      case 'photoUrl':
        // Show/hide Image Upload to change Image
        this.basicProfileParams['photoUrlImage'].hidden =
          !this.basicProfileParams['photoUrlImage'].hidden;
        break;
      case 'defaultAddressId':
        // Show Address List and set default address
        break;
      default:
    }
  }

  private async changeProfileImage(
    value: ImageUpload,
    control: AbstractControl
  ): Promise<void> {
    this.loading = true;
    this.error = null;
    value &&
      this.profilePageService
        .updateProfileImage(value)
        .then((photoUrl) => {
          this.profile = { ...this.profile, photoUrl };
          this.loading = false;
        })
        .catch((error) => {
          this.error = {
            code: error?.code || error?.error?.code || '',
            message: error?.message || error?.error?.message || error
          };
          this.loading = false;
        });
  }
}
