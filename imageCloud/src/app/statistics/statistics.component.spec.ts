import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdCardModule, MdInputModule } from '@angular/material';

import { DialogModule } from 'primeng/components/dialog/dialog';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';

import { StatisticsComponent } from './statistics.component';
import { AssetUploadDialogComponent } from 'app/asset-upload-dialog/asset-upload-dialog.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent, AssetUploadDialogComponent],
      imports: [
        MdCardModule, MdInputModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
        DialogModule, MultiSelectModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
