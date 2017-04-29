import { Injectable } from '@angular/core';
import { Asset } from '../shared/asset';
import { ASSETS } from '../shared/mock-assets';

@Injectable()
export class AssetService {

  	/**
	 * Constructor.
	 */
    public constructor() {
		// nothing
    }

    /**
     * Returns a list of assets.
     *
     * @return {Promise<Asset[]>} list of assets.
     */
    public getAssets(): Promise<Asset[]> {
        return Promise.resolve(ASSETS);
    }

}
