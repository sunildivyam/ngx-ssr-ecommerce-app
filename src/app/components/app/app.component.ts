import { Component, OnInit, NgZone } from '@angular/core';
import { MenuItem } from '@annuadvent/ngx-common-ui/menu';
import { SpinnerMode } from '@annuadvent/ngx-common-ui/spinner';
import { ThemeService } from '@annuadvent/ngx-common-ui/theme';
import { AppSpinnerService } from '../../modules/app-core/services/app-spinner.service';
import { AppStateService } from '../../modules/app-core/services/app-state.service';
import { AppState } from '../../modules/app-core/interfaces/app-state.interface';
import { AppConfigService, AppConfig } from '@annuadvent/ngx-core/app-config';
import {
  SOCIAL_MEDIA_BUTTONS,
  SocialMediaButton
} from '@annuadvent/ngx-common-ui/social-media';
import { NavService } from '../../modules/app-core/services/nav.service';
import { AppError } from '@annuadvent/ngx-common-ui/error';
import { AppErrorService } from '../../modules/app-core/services/app-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appConfig: AppConfig;
  mainMenuItems: Array<MenuItem> = [];
  footerNavItems: Array<MenuItem> = [];
  isMainNavOpen: boolean = false;
  SpinnerMode = SpinnerMode;
  themeFontSizes: Array<string> = ['12px', '16px', '20px'];
  socialMediaButtons: Array<SocialMediaButton> = [];
  menuHeight: number = 0;
  error: AppError;

  constructor(
    private themeService: ThemeService,
    public appSpinner: AppSpinnerService,
    private appStateService: AppStateService,
    private appConfigService: AppConfigService,
    private navService: NavService,
    private errorService: AppErrorService,
    private zone: NgZone
  ) {
    this.appConfig = this.appConfigService.config;

    // Subscribe Error
    this.errorService.error.subscribe((error) => (this.error = error));

    // Nav items subscribe
    this.navService.navItems.subscribe((items) => {
      this.mainMenuItems = items;
      this.footerNavItems = items;
    });

    this.appStateService.appState.subscribe((appState: AppState) => {
      // TODO: State change
    });

    // init social media
    this.initSocialMedia();
  }

  async ngOnInit(): Promise<void> {
    this.themeService.setTheme(this.appConfig.themeName, true);
  }

  public loginStatusClicked(): void {
    this.isMainNavOpen = !this.isMainNavOpen;
  }

  public mainMenuOpenStatusChanged(opened: boolean): void {
    this.isMainNavOpen = opened;
  }

  public initSocialMedia(): void {
    const socialMeidaConfig = this.appConfigService.config.socialMedia || {};

    this.socialMediaButtons = SOCIAL_MEDIA_BUTTONS.map((btn) => {
      return {
        ...btn,
        url: socialMeidaConfig[btn.id]
      };
    });
  }

  public onMainMenuResize(height: number): void {
    this.zone.run(() => setTimeout(() => (this.menuHeight = height)));
  }
}
