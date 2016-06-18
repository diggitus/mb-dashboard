import { Component, OnInit } from '@angular/core';
import { Tile } from './tile';
import { TileService } from './tile.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html',
	styleUrls: ['app/components/dashboard/dashboard.component.css'],
	providers: [TileService]
})
export class DashboardComponent implements OnInit {

	tiles: Tile[] = [];

	constructor(
		private _tileService: TileService) { 
	}

	getTiles() {
		return this._tileService.getTiles()
			.then(tiles => this.tiles = tiles);
	}

	ngOnInit() {
		this.getTiles();
	}

}