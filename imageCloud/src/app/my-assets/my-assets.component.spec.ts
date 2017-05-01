import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchComponent } from 'app/search/search.component';

import { MyAssetsComponent } from './my-assets.component';

describe('MyAssetsComponent', () => {
  let component: MyAssetsComponent;
  let fixture: ComponentFixture<MyAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAssetsComponent, SearchComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
