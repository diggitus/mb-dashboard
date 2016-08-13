import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Button } from 'primeng/primeng';

@Component({
    selector: 'image-editor',
    templateUrl: 'app/components/image-editor/image-editor.component.html',
    styleUrls: ['app/components/image-editor/image-editor.component.css'],
    directives: [Button]
})
export class ImageEditorComponent implements AfterViewInit {

    @ViewChild('canvas') canvas;
    @ViewChild('saveSection') saveSection;

    private canvasElement: HTMLCanvasElement;
    private canvasCtx: CanvasRenderingContext2D;
    private img: HTMLImageElement;

    constructor() {
        // nothing
    }

    ngAfterViewInit() {
        this.initCanvasCtx();
    }

    private initCanvasCtx() {
        let canvas: ElementRef = this.canvas;
        this.canvasElement = canvas.nativeElement;
        this.canvasCtx = this.canvasElement.getContext('2d');
    }

    loadImage() {
        this.img = new Image();
        this.img.addEventListener('load', () => {
            this.canvasCtx.drawImage(this.img, 0, 0);
        }, false);
        this.img.src = '../../app/resources/images/a45-amg.jpg';
    }

    saveImage() {
        if (this.canvasCtx === null) return;

        let imageSrc: String = this.canvasElement.toDataURL('image/png');
        let saveSection: ElementRef = this.saveSection;
        let el:HTMLElement = this.saveSection.nativeElement;
        let link:HTMLAnchorElement = document.createElement('a');
        link.href = imageSrc.toString();
        link.text = "Download image";
        link.setAttribute("download", "myFile.png");

        el.appendChild(link);
    }

    drawRect() {
        if (this.canvasCtx === null) return;

        this.canvasCtx.fillStyle = '#FF0000';
        this.canvasCtx.fillRect(0, 0, 150, 75);
    }
}