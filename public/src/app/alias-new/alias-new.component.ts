import { Component, OnInit } from '@angular/core';
import { MaterialInputComponent } from '../material-input';
import { Alias } from '../alias.class';

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

  newAlias: Alias

  constructor() { 
    this.newAlias = new Alias
  }

  ngOnInit() {
  }

  save() {
    console.log( this.newAlias )
  }

}
