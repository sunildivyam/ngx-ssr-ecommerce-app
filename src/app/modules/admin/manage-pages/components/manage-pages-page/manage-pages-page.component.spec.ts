import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePagesPageComponent } from './manage-pages-page.component';

describe('ManagePagesPageComponent', () => {
  let component: ManagePagesPageComponent;
  let fixture: ComponentFixture<ManagePagesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePagesPageComponent]
    });
    fixture = TestBed.createComponent(ManagePagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
