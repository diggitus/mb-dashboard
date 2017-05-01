import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  template: ''
})
export class MockDashboardComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockDashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'dashboard',
          component: MockDashboardComponent
        }])
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
