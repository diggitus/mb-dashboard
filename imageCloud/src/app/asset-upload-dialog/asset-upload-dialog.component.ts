import { Component, OnInit } from '@angular/core';
import { DialogModule, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'asset-upload-dialog',
  templateUrl: './asset-upload-dialog.component.html',
  styleUrls: ['./asset-upload-dialog.component.css']
})
export class AssetUploadDialogComponent {

    display: boolean = false;
    draggable: boolean = false;
    resizable: boolean = false;

    submitted: boolean;

    cities: SelectItem[];
    selectedCity: string[];

    constructor() {
        this.cities = [];
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
    }

    public showDialog() {
        this.display = true;
    }

    public onSubmit() {
        this.submitted = true;
    }

}
