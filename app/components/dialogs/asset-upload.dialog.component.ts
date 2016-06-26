import { Component } from '@angular/core';
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import { Dialog, Button, InputText, InputTextarea, Panel, MultiSelect, SelectItem } from 'primeng/primeng';


@Component({
	selector: 'asset-upload-dialog',
	templateUrl: 'app/components/dialogs/asset-upload.dialog.component.html',
	directives: [Dialog, Button, InputText, InputTextarea, Panel, MultiSelect]
})
export class AssetUploadComponent {

	display: boolean = false;
	draggable: boolean = false;
	resizable: boolean = false;

	userform: ControlGroup;
	submitted: boolean;

	cities: SelectItem[];
	selectedCity: string[];

	constructor(fb: FormBuilder) {
		this.userform = fb.group({
			'title': new Control('', Validators.required),
			'description': new Control(''),
			'tags': new Control('', Validators.required)
		});

		this.cities = [];
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
	}

	public showDialog():void {
		this.display = true;
	}

	public onSubmit(value:string) {
		this.submitted = true;
	}

}