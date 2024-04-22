import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';

import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { UtilsService } from '@annuadvent/ngx-core/utils';
import { FireStorageImageService } from '@annuadvent/ngx-tools/fire-storage';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoriesPageService {
  private $categoryMaxLevels = new BehaviorSubject<number>(0);
  private $categories = new BehaviorSubject<Array<Category>>([]);

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService,
    private gcService: GlobalConfigService,
    private fireImageService: FireStorageImageService,
    @Inject('API_URLS') private API_URLS: any
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
        this.http.get(`${this.API_URLS.CATEGORIES.ALL}`)
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
        this.http.post(`${this.API_URLS.CATEGORIES.ADD}`, category)
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
        this.http.post(`${this.API_URLS.CATEGORIES.UPDATE}/${id}`, category)
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

  private getFileNameFromUrl(url: string): string {
    const t1 = url.split('fileName=');
    return t1[t1.length - 1];
  }

  public async deleteCategory(cat: Category): Promise<boolean> {
    const { id, imageUrl } = cat;

    try {
      const result: any = await lastValueFrom(
        this.http.post(`${this.API_URLS.CATEGORIES.DELETE}/${id}`, {})
      );

      if (imageUrl) {
        const imgPath = `${this.gcService.getValue(
          GlobalConfigParamsEnum.categoriesImagePath
        )}/${cat.id}/${this.getFileNameFromUrl(imageUrl)}`;

        try {
          await this.fireImageService.deleteImageByPath(imgPath);
        } catch (error) {
          console.log(error);
          // Do nothing
        }
      }

      this.$categories.next([
        ...this.$categories.value.filter((cat) => cat.id !== id)
      ]);

      return result.success;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateImage(
    category: Category,
    imageInfo: ImageUpload
  ): Promise<Category> {
    const imgPath = `${this.gcService.getValue(
      GlobalConfigParamsEnum.categoriesImagePath
    )}/${category.id}/${imageInfo.fileName}`;

    try {
      await this.fireImageService.uploadImageByPath(
        imgPath,
        imageInfo.data,
        true
      );

      // Delete Existing image
      if (category.imageUrl) {
        const imgPath = `${this.gcService.getValue(
          GlobalConfigParamsEnum.categoriesImagePath
        )}/${category.id}/${category.imageUrl}`;
        await this.fireImageService.deleteImageByPath(imgPath);
      }

      category.imageUrl = imageInfo.fileName;

      const updatedCategory = this.updateCategory(category.id, category);
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}
