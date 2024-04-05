import { Component, OnInit } from '@angular/core';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { ProfilePageService } from '../../services/profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileParams: FormConfigGroup;

  constructor(private profilePageService: ProfilePageService) {
    this.profilePageService.profileParams.subscribe(
      (pParams) => (this.profileParams = pParams)
    );
  }

  ngOnInit(): void {
    this.profilePageService.getProfileParams();
  }
  public onCancel(event: any): void {
    event.preventDefault();
  }

  public onSubmit(event: any): void {
    event.preventDefault();
    // Save value for the control to database
  }
}
