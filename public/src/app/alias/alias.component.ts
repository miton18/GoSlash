import { Component, OnInit } from '@angular/core';
import { AliasService } from '../alias.service';

@Component({
  moduleId: module.id,
  selector: 'app-alias',
  templateUrl: 'alias.component.html',
  styleUrls: ['alias.component.css']
})
export class AliasComponent implements OnInit {

  constructor(private alias: AliasService) { }

  ngOnInit() {
    console.log( this.alias.all() )
  }

}
