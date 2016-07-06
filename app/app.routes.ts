import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MyAssetsComponent } from './components/my-assets/my-assets.component';

const routes: RouterConfig = [
	{ path: 'dashboard', component: DashboardComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'my-assets', component: MyAssetsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];