import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConfigPageComponent } from './manage-config-page.component';

describe('ManageConfigPageComponent', () => {
  let component: ManageConfigPageComponent;
  let fixture: ComponentFixture<ManageConfigPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageConfigPageComponent]
    });
    fixture = TestBed.createComponent(ManageConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
