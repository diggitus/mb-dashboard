import { Component, OnInit, Input } from '@angular/core';
import { Asset } from './asset';


@Component({
	selector: 'tile',
	templateUrl: 'app/components/dashboard/tile.component.html',
    styleUrls: ['app/components/dashboard/tile.component.css']
})
export class TileComponent implements OnInit {

    @Input() asset:Asset;

    @Input() width:number;

    @Input() height:number;

    @Input() top:number;

    @Input() left:number;

    @Input() imgWidth:number;

    @Input() imgHeight:number;

    @Input() imgMarginTop:number;

    @Input() imgMarginLeft:number;

    border:number = 4;


    /**
     * Constuctor.
     */
	public constructor() {}

    /**
     * Initalize tile component.
     */
	public ngOnInit() {
		this.getImageSize();
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
