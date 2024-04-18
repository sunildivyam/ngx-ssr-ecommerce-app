import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { URLS } from '../constants/api-urls.constant';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';
import { ImageUpload } from '@annuadvent/ngx-common-ui/image-upload';
import { FireAuthService } from '@annuadvent/ngx-tools/fire-auth';
import { FireStorageImageService } from '@annuadvent/ngx-tools/fire-storage';
import { AppConfigService } from '@annuadvent/ngx-core/app-config';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  private $profileParams = new BehaviorSubject<FormConfigGroup>(null);
  private $profileImageStoragePath = '';

  constructor(
    private http: HttpClient,
    private authService: FireAuthService,
    private fireImageService: FireStorageImageService,
    private configService: AppConfigService,
    private gcService: GlobalConfigService
  ) {
    this.gcService.config.subscribe(() => {
      this.$profileImageStoragePath = this.gcService.getValue(
        GlobalConfigParamsEnum.userImagePath
      );
    });
  }

  public get profileParams(): Observable<FormConfigGroup> {
    return this.$profileParams.asObservable();
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

  public async addProfile(profile: Profile): Promise<Profile> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.ADD}`, profile)
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

  public async updateProfilePhotoUrl(
    uid: string,
    photoUrl: string
  ): Promise<string> {
    try {
      const result: any = await lastValueFrom(
        this.http.post(`${URLS.UPDATE_PHOTOURL}/${uid}`, { photoUrl })
      );

      return photoUrl;
    } catch (error: any) {
      throw error;
    }
  }

  public async updateProfileImage(imageInfo: ImageUpload): Promise<string> {
    const uid = this.authService.getCurrentUserId();
    const imgPath = `${this.$profileImageStoragePath}/${uid}/${imageInfo.fileName}`;
    const photoUrl = `${this.configService.config.apiBaseUrl}/api/images/profile/${uid}?fileName=${imageInfo.fileName}`;

    try {
      await this.fireImageService.uploadImageByPath(
        imgPath,
        imageInfo.data,
        true
      );

      await this.updateProfilePhotoUrl(uid, photoUrl);

      return photoUrl;
    } catch (error: any) {
      throw error;
    }
  }
}
