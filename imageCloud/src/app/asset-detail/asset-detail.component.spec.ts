import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AssetDetailComponent } from './asset-detail.component';

describe('AssetDetailComponent', () => {
  let component: AssetDetailComponent;
  let fixture: ComponentFixture<AssetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssetDetailComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: Observable.of({
            id: 5
          })
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
