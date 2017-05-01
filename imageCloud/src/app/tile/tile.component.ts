import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../shared/asset';
import { RatingModule } from 'primeng/primeng';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input() asset: Asset;

    @Input() width: number;

    @Input() height: number;

    @Input() top: number;

    @Input() left: number;

    @Input() imgWidth: number;

    @Input() imgHeight: number;

    @Input() imgMarginTop: number;

    @Input() imgMarginLeft: number;

    border = 4;
    showShadow = false;
    showOverlay = false;

    /**
     * Constuctor.
     */
    public constructor(private router: Router) { }

    /**
     * Initalize tile component.
     */
    public ngOnInit() {
        this.getImageSize();
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.showShadow = true;
        this.showOverlay = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.showShadow = false;
        this.showOverlay = false;
    }

    public openAssetDetail(asset: Asset) {
        const link = ['/asset-detail', asset.id];
        this.router.navigate(link);
    }

    /**
     * Returns the correct image size for the current tile.
     */
    protected getImageSize() {
        let newImgWidth = 0;
        let newImgHeight = 0;
        let scaleFactor = 0;

        newImgWidth = this.width;
        scaleFactor = newImgWidth / this.asset.width;
        newImgHeight = this.asset.height * scaleFactor;

        if (newImgHeight < this.height) {
            scaleFactor = this.height / newImgHeight;
            newImgHeight = this.height;
            newImgWidth = newImgWidth * scaleFactor;
        }

        this.imgWidth = Math.ceil(newImgWidth);
        this.imgHeight = Math.ceil(newImgHeight);
        this.imgMarginTop = -Math.ceil((Math.ceil(newImgHeight) - this.height) / 2);
        this.imgMarginLeft = -Math.ceil((Math.ceil(newImgWidth) - this.width) / 2);
    }

}
