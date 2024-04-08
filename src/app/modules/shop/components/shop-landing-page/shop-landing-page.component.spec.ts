import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLandingPageComponent } from './shop-landing-page.component';

describe('ShopLandingPageComponent', () => {
  let component: ShopLandingPageComponent;
  let fixture: ComponentFixture<ShopLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLandingPageComponent]
    });
    fixture = TestBed.createComponent(ShopLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
