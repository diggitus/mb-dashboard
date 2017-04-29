import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Button } from 'primeng/primeng';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.css']
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
        const canvas: ElementRef = this.canvas;
        this.canvasElement = canvas.nativeElement;
        this.canvasCtx = this.canvasElement.getContext('2d');
    }

    loadImage() {
        this.img = new Image();
        this.img.addEventListener('load', () => {
            this.canvasCtx.drawImage(this.img, 0, 0);
        }, false);
        this.img.src = '../assets/images/a45-amg.jpg';
    }

    saveImage() {
        if (this.canvasCtx === null) {
            return;
        }
        const imageSrc: String = this.canvasElement.toDataURL('image/png');
        const saveSection: ElementRef = this.saveSection;
        const el: HTMLElement = this.saveSection.nativeElement;
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = imageSrc.toString();
        link.text = 'Download image';
        link.setAttribute('download', 'myFile.png');

        el.appendChild(link);
    }

    drawRect() {
        if (this.canvasCtx === null) {
            return;
        }
        this.canvasCtx.fillStyle = '#FF0000';
        this.canvasCtx.fillRect(0, 0, 150, 75);
    }
}
