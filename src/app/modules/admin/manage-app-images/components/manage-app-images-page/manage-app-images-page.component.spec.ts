import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppImagesPageComponent } from './manage-app-images-page.component';

describe('ManageAppImagesPageComponent', () => {
  let component: ManageAppImagesPageComponent;
  let fixture: ComponentFixture<ManageAppImagesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAppImagesPageComponent]
    });
    fixture = TestBed.createComponent(ManageAppImagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
