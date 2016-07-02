import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'tile',
	templateUrl: 'app/components/dashboard/tile.component.html',
})
export class TileComponent implements OnInit {

	constructor() {
		// nothing
	}

	ngOnInit() {
		console.log("tile loaded");
	}

}