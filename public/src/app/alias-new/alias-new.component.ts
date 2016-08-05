import { Component, OnInit } from '@angular/core';

import { MaterialInputComponent } from '../material-input';

@Component({
  moduleId: module.id,
  selector: 'app-alias-new',
  templateUrl: 'alias-new.component.html',
  styleUrls: [
    'alias-new.component.css', 
    '../alias-item/alias-item.component.css'
  ],
  directives: [
    MaterialInputComponent
  ] 
})
export class AliasNewComponent implements OnInit {

  newAlias: Object

  constructor() { 
    this.newAlias = {}
  }

  ngOnInit() {
  }

  save() {
    console.log( this.newAlias )
  }

}
