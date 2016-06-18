import { Injectable } from '@angular/core';

import { TILES } from './mock-tiles';

@Injectable()
export class TileService {
	constructor() { }

	getTiles() {
		return Promise.resolve(TILES);
	}

}