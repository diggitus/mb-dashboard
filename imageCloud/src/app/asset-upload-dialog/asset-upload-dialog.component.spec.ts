import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUploadDialogComponent } from './asset-upload-dialog.component';

describe('AssetUploadDialogComponent', () => {
  let component: AssetUploadDialogComponent;
  let fixture: ComponentFixture<AssetUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetUploadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
