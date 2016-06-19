import { Component, OnInit } from '@angular/core';
import { Tile } from './tile';
import { TileService } from './tile.service';
import { InputText } from 'primeng/primeng';


@Component({
	selector: 'dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html',
	styleUrls: ['app/components/dashboard/dashboard.component.css'],
	providers: [TileService],
	directives: [InputText]
})
export class DashboardComponent implements OnInit {

	tiles: Tile[] = [];
	text: string;

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