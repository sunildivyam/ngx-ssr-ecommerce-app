import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLevel1PageComponent } from './shop-level1-page.component';

describe('ShopLevel1PageComponent', () => {
  let component: ShopLevel1PageComponent;
  let fixture: ComponentFixture<ShopLevel1PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopLevel1PageComponent]
    });
    fixture = TestBed.createComponent(ShopLevel1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
