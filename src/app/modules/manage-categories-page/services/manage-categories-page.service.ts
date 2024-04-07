import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { API_URLS } from '../../../constants/api-urls.constants';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { UtilsService } from '@annuadvent/ngx-core/utils';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoriesPageService {
  private $categoryMaxLevels = new BehaviorSubject<number>(0);
  private $categories = new BehaviorSubject<Array<Category>>([]);

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService,
    private gcService: GlobalConfigService
  ) {
    this.gcService.config.subscribe((config) =>
      this.$categoryMaxLevels.next(
        this.gcService.getValue(GlobalConfigParamsEnum.categoryMaxLevels)
      )
    );
  }

  public get categoryMaxLevels(): Observable<number> {
    return this.$categoryMaxLevels.asObservable();
  }

  public get categories(): Observable<Array<Category>> {
    return this.$categories.asObservable();
  }

  public async getCategories(force: boolean = false): Promise<Array<Category>> {
    // get from database
    if (!force && this.$categories.value?.length) {
      return this.$categories.value;
    }

    try {
      const categoryR: any = await lastValueFrom(
        this.http.get(`${API_URLS.CATEGORIES.ALL}`)
      );

      const categories = categoryR.map((cat) => new Category(cat));

      this.$categories.next(categories);
      return categories;
    } catch (error: any) {
      this.$categories.next([]);
      throw error;
    }
  }

  public async addCategory(category: Category): Promise<Category> {
    const id = this.utilsService.toDashedString(category.title);
    category.id = id;

    try {
      const result: any = await lastValueFrom(
        this.http.post(`${API_URLS.CATEGORIES.ADD}`, category)
      );

      const categoryR = new Category(result);
      this.$categories.next([categoryR, ...this.$categories.value]);

      return categoryR;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateCategory(
    id: string,
    category: Category
  ): Promise<Category> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${API_URLS.CATEGORIES.UPDATE}/${id}`, category)
      );
      const categoryR = new Category(result);

      this.$categories.next([
        ...this.$categories.value.map((cat) =>
          cat.id === categoryR.id ? categoryR : cat
        )
      ]);

      return categoryR;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteCategory(id: string): Promise<boolean> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${API_URLS.CATEGORIES.DELETE}/${id}`, {})
      );

      this.$categories.next([
        ...this.$categories.value.filter((cat) => cat.id !== id)
      ]);

      return result.success;
    } catch (error: any) {
      throw error;
    }
  }
}
