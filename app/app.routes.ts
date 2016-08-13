import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MyAssetsComponent } from './components/my-assets/my-assets.component';
import { AssetDetailComponent } from './components/asset/asset-detail.component';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';

const routes: RouterConfig = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'my-assets', component: MyAssetsComponent },
  { path: 'asset-detail/:id', component: AssetDetailComponent },
  { path: 'image-editor', component: ImageEditorComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
