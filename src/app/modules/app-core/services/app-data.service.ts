import { Injectable } from '@angular/core';
import { APP_STATE_KEYS } from '../constants/app-state.constants';
import { GlobalConfigService } from '@annuadvent/ngx-core/global-config';
import { CategoriesService } from './categories.service';
import { AppErrorService } from './app-error.service';
import { AppStateParams } from '../interfaces/app-state.interface';
import { ProductQueryService } from './product-query.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  constructor(
    private globalConfigService: GlobalConfigService,
    private categoriesService: CategoriesService,
    private productsQueryService: ProductQueryService,
    private errorService: AppErrorService
  ) {}

  public async getValue(stateName: string, params: any = null): Promise<any> {
    let value: any = null;

    switch (stateName) {
      case APP_STATE_KEYS.globalConfig:
        value = await this.getGlobalConfig();
        break;
      case APP_STATE_KEYS.liveCategories:
        value = await this.getLiveCategories();
        break;
      case APP_STATE_KEYS.productListForShop:
        value = await this.getProductListForShop(params);
        break;
      // case APP_STATE_KEYS.somestateKey:
      //   value = await this.getValueForSomeStateKey(params);
      //   break;
      default:
      // NOTE: Add one separate switch case for each AppState items, above
    }

    return value;
  }

  public async getGlobalConfig(): Promise<any> {
    return await this.globalConfigService.fetch().catch((error) => {
      this.errorService.error = error;
      return null;
    });
  }

  public async getLiveCategories(): Promise<any> {
    return await this.categoriesService.getCategories().catch((error) => {
      this.errorService.error = error;
      return null;
    });
  }

  public async getProductListForShop(params: AppStateParams): Promise<any> {
    return await this.productsQueryService
      .getProducts(params.categoryIds, true)
      .catch((error) => {
        this.errorService.error = error;
        return null;
      });
  }

  // This is the sample pattern to follow to get and serve data.
  // public async getValueForSomeStateKey(params: any) {
  //   if (!params) throw new Error('getValueForSomeStateKey() requires params: param1, param2.');
  //   const { param1, param2 } = params;

  //   const value = await this.someService.getData(param1, param2);

  //   return value;
  // }
}
