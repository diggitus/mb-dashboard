import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AssetUploadComponent } from './components/dialogs/asset-upload.dialog.component';
import { AssetDetailComponent } from './components/asset-detail/asset-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, AssetUploadComponent]
})
export class AppComponent {

}
