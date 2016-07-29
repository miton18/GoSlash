import { Component } from '@angular/core';
import { AliasListComponent } from './alias-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.css',
    'font/fonts.css'
  ],
  directives: [AliasListComponent]
})
export class AppComponent {
  title = 'GoSlash';

}
