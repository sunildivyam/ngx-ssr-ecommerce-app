import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  Category,
  CategoryImageUrlPipe
} from '@annuadvent/ngx-core/helpers-categories';
import {
  APP_STATE_KEYS,
  AppStateService,
  DEFAULT_CATEGORY_IMAGE
} from '../../../app-core';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { BannerItem } from '@annuadvent/ngx-common-ui/banners';
import { AppImageUrlPipe } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-shop-level1-page',
  templateUrl: './shop-level1-page.component.html',
  styleUrls: ['./shop-level1-page.component.scss']
})
export class ShopLevel1PageComponent implements OnInit, OnChanges {
  @Input() value: Category = null;

  catList: Array<Category> = [];
  liveCategories: Array<Category> = [];
  defaultImage = DEFAULT_CATEGORY_IMAGE;
  bannerImages: Array<BannerItem> = [];

  constructor(
    private appStateService: AppStateService,
    private gcService: GlobalConfigService,
    private categoryImagePipe: CategoryImageUrlPipe,
    private appImagePipe: AppImageUrlPipe
  ) {
    this.appStateService.appState.subscribe((state) => {
      this.liveCategories = state[APP_STATE_KEYS.liveCategories] || [];
    });

    this.gcService.config.subscribe(() => {
      const banners = this.gcService.getValue(
        GlobalConfigParamsEnum.bannerImageUrls
      );

      this.setBannerImages((banners && banners[this.value?.id]) || []);
    });
  }

  private setBannerImages(bannerImages: Array<BannerItem>): void {
    if (bannerImages?.length) {
      this.bannerImages = bannerImages.map((bImg) => ({
        href: bImg.href,
        src: bImg.src?.startsWith('http')
          ? bImg.src
          : this.appImagePipe.transform(bImg.src)
      }));
    } else {
      this.bannerImages = [
        {
          src: this.categoryImagePipe.transform(
            this.value?.bannerUrl,
            this.value
          ),
          href: `/shop/${this.value?.id}`
        }
      ];
    }
  }

  ngOnInit(): void {
    this.setBannerImages(this.bannerImages);
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['value'] && this.setBannerImages(this.bannerImages);
  }
}
