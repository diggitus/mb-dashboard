import { Component, OnInit } from '@angular/core';
import { TileComponent } from './tile.component';
import { DashboardService } from './dashboard.service';
import { Asset } from './asset';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html',
	styleUrls: ['app/components/dashboard/dashboard.component.css'],
	providers: [DashboardService],
	directives: [TileComponent]
})
export class DashboardComponent implements OnInit {

	private assets: Asset[] = [];
	private text: string;

	/**
	 * Constructor.
	 * @param {DashboardService} The dashboad service.
	 */	
	public constructor(
		private _dashboardService: DashboardService) { 
	}

	/**
	 * Get assets which will be displayed in the dashboard.
	 */
	getAssets() {
		return this._dashboardService.getAssets()
			.then(assets => this.assets = assets);
	}

	/**
	 * Initialize dashboard.
	 */
	ngOnInit() {
		this.getAssets();
	}

}