import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Asset } from './asset';


@Component({
    selector: 'asset-detail',
    templateUrl: 'app/components/asset/asset-detail.component.html'
})
export class AssetDetailComponent implements OnInit {

    private asset: Asset;
    private sub: any;
    private id: number;

    /**
    * Constructor.
    */
    public constructor(private route: ActivatedRoute) {
        // nothing
    }

    /**
    * Initialize.
    */
    public ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            // this.heroService.getHero(id).then(hero => this.hero = hero);
            this.id = id;
        });
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
