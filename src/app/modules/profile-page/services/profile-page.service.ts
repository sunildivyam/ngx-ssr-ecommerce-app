import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { URLS } from '../constants/api-urls.constant';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  private $profileParams = new BehaviorSubject<FormConfigGroup>(null);

  constructor(private http: HttpClient) {}

  public get profileParams(): Observable<FormConfigGroup> {
    return this.$profileParams.asObservable();
  }

  public async getProfileParams(): Promise<FormConfigGroup> {
    // List from cache
    if (this.$profileParams.value && this.$profileParams.value.length) {
      return this.$profileParams.value;
    }

    // profileParams from database
    try {
      const profileParams: any = await lastValueFrom(
        this.http.get(URLS.PROFILE_PARAMS)
      );
      this.$profileParams.next(profileParams);
      return profileParams;
    } catch (error: any) {
      this.$profileParams.next(null);
      throw error;
    }
  }
}
