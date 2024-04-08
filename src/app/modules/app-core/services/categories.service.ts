import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { API_URLS } from '../../../constants/api-urls.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private $liveCategories = new BehaviorSubject<Array<Category>>([]);
  constructor(private http: HttpClient) {}

  public async getCategories(force: boolean = false): Promise<Array<Category>> {
    // get from database
    if (!force && this.$liveCategories.value?.length) {
      return this.$liveCategories.value;
    }

    try {
      const categoryR: any = await lastValueFrom(
        this.http.get(`${API_URLS.CATEGORIES.LIST}`)
      );

      const categories = categoryR.map((cat) => new Category(cat));

      this.$liveCategories.next(categories);
      return categories;
    } catch (error: any) {
      this.$liveCategories.next([]);
      throw error;
    }
  }
}
