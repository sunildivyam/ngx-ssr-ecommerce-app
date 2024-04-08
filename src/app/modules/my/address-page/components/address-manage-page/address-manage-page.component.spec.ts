import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressManagePageComponent } from './address-manage-page.component';

describe('AddressManagePageComponent', () => {
  let component: AddressManagePageComponent;
  let fixture: ComponentFixture<AddressManagePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressManagePageComponent]
    });
    fixture = TestBed.createComponent(AddressManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
