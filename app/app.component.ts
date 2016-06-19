import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Dialog, Button } from 'primeng/primeng';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, Dialog, Button],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}
])
export class AppComponent { 

	display: boolean = false;
	draggable: boolean = false;
	resizable: boolean = false;

	showDialog() {
		this.display = true;
	}

}
