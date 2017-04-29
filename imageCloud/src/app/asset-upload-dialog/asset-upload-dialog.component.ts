import { Component } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';

@Component({
    selector: 'app-asset-upload-dialog',
    templateUrl: './asset-upload-dialog.component.html',
    styleUrls: ['./asset-upload-dialog.component.css']
})
export class AssetUploadDialogComponent {

    display = false;
    draggable = false;
    resizable = false;

    submitted: boolean;

    cities: SelectItem[];
    selectedCity: string[];

    title: string;
    description: string;
    tags: string;

    /**
     * Constructor.
     */
    constructor() {
        this.cities = [];
        this.cities.push({ label: 'New York', value: 'New York' });
        this.cities.push({ label: 'Rome', value: 'Rome' });
        this.cities.push({ label: 'London', value: 'London' });
        this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
        this.cities.push({ label: 'Paris', value: 'Paris' });
    }

    /**
     * Displays dialog.
     */
    showDialog() {
        this.display = true;
    }

    onSubmit() {
        this.submitted = true;
        this.display = false;
    }

}
