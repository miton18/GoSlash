import { Component } from '@angular/core';
import { AliasListComponent } from './alias-list';
import { AliasNewComponent } from './alias-new';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.css',
    'font/fonts.css'
  ],
  directives: [
    ROUTER_DIRECTIVES,
    AliasListComponent,
    AliasNewComponent
  ]
})
export class AppComponent {
  title = 'Go/';

}
