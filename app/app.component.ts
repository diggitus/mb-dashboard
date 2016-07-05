import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MyAssetsComponent } from './components/my-assets/my-assets.component';
import { AssetUploadComponent } from './components/dialogs/asset-upload.dialog.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, AssetUploadComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
    {
        path: '/statistics',
        name: 'Statistics',
        component: StatisticsComponent
    },
    {
        path: '/my-assets',
        name: 'My Assets',
        component: MyAssetsComponent
    }
])
export class AppComponent {

}
