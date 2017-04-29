import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '../shared/asset';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {

    private asset: Asset;
    private sub: any;
    id: number;

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
            const id = +params['id'];
            // this.heroService.getHero(id).then(hero => this.hero = hero);
            this.id = id;
        });
    }

    public onDestroy() {
        this.sub.unsubscribe();
    }

}
