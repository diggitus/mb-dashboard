import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RatingModule, DialogModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import { InputTextareaModule, PanelModule, MultiSelectModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { AssetUploadDialogComponent } from './asset-upload-dialog/asset-upload-dialog.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchService } from 'app/search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    AssetDetailComponent,
    DashboardComponent,
    TileComponent,
    AssetUploadDialogComponent,
    ImageEditorComponent,
    MyAssetsComponent,
    StatisticsComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RatingModule, DialogModule, ButtonModule, InputTextModule, InputTextareaModule, PanelModule, MultiSelectModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'my-assets', component: MyAssetsComponent },
      { path: 'asset-detail/:id', component: AssetDetailComponent },
      { path: 'image-editor', component: ImageEditorComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }