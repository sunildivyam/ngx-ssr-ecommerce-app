import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { URLS } from '../constants/api-urls.constant';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';

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

  public async getProfile(id: string): Promise<Profile> {
    // get from database
    try {
      const profileR: any = await lastValueFrom(
        this.http.get(`${URLS.PROFILE}/${id}`)
      );
      const profile = new Profile(profileR);

      return profile;
    } catch (error: any) {
      throw error;
    }
  }

  public async addProfile(id: string, profile: Profile): Promise<Profile> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.ADD}/${id}`, profile)
      );
      const profileR = new Profile(result);
      return profileR;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateProfile(id: string, profile: Profile): Promise<Profile> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.UPDATE}/${id}`, profile)
      );
      const profileR = new Profile(result);
      return profileR;
    } catch (error: any) {
      throw error;
    }
  }

  public async deleteProfile(id: string): Promise<boolean> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.DELETE}/${id}`, {})
      );

      return result.success;
    } catch (error: any) {
      throw error;
    }
  }
}
