import { ResolveFn } from '@angular/router';
import { ProfilePageService } from '../services/profile-page.service';
import { inject } from '@angular/core';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';
import { FireAuthService } from '@annuadvent/ngx-tools/fire-auth';

export const profileResolver: ResolveFn<Profile> = async (route, state) => {
  const id = inject(FireAuthService).getCurrentUserId();
  if (!id) return null;

  try {
    const profile = await inject(ProfilePageService).getProfile(id);
    return profile;
  } catch (error) {
    return new Profile();
  }
};
