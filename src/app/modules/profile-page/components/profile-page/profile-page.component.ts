import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Profile } from '@annuadvent/ngx-core/helpers-auth';
import {
  mobilePhoneValidator,
  trimSpacesValidator
} from '@annuadvent/ngx-core/helpers-ecommerce';
import { GenderEnum } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  fm: FormGroup;
  profile: Profile = new Profile();
  editMode = {};
  genderEnum = GenderEnum;

  constructor(private fb: FormBuilder) {
    this.fm = this.fb.group({
      id: [this.profile.id, []],
      displayName: [
        this.profile.displayName,
        [trimSpacesValidator, Validators.required, Validators.maxLength(70)]
      ],
      email: [
        this.profile.email,
        [
          trimSpacesValidator,
          Validators.required,
          Validators.email,
          Validators.maxLength(200)
        ]
      ],
      phoneNumber: [
        this.profile.phoneNumber,
        [trimSpacesValidator, Validators.required, mobilePhoneValidator]
      ],
      photoUrl: [
        this.profile.photoUrl,
        [trimSpacesValidator, Validators.maxLength(500)]
      ],
      gender: [this.profile.gender, [trimSpacesValidator]],
      defaultAddressId: [this.profile.defaultAddressId, [trimSpacesValidator]],
      bio: [this.profile.bio, [trimSpacesValidator, Validators.maxLength(500)]],
      dob: [this.profile.dob, [trimSpacesValidator]],
      createTime: [this.profile.createTime, []],
      updateTime: [this.profile.updateTime, []]
    });
  }

  public get displayName(): AbstractControl {
    return this.fm.get('displayName');
  }

  public get email(): AbstractControl {
    return this.fm.get('email');
  }

  public get phoneNumber(): AbstractControl {
    return this.fm.get('phoneNumber');
  }

  public get photoUrl(): AbstractControl {
    return this.fm.get('photoUrl');
  }

  public get gender(): AbstractControl {
    return this.fm.get('gender');
  }

  public get defaultAddressId(): AbstractControl {
    return this.fm.get('defaultAddressId');
  }

  public get bio(): AbstractControl {
    return this.fm.get('bio');
  }

  public get dob(): AbstractControl {
    return this.fm.get('dob');
  }

  public onEditClicked(event: any, controlName: string): void {
    event.preventDefault();
    this.editMode[controlName] = true;
  }

  public onSaveClicked(event: any, controlName: string): void {
    event.preventDefault();
    // Save value for the control to database

    // On success close edit mode
    this.editMode[controlName] = false;
  }
}
