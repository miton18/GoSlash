import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-alias',
  templateUrl: 'alias.component.html',
  styleUrls: ['alias.component.css']
})
export class AliasComponent implements OnInit {

  @Input()
  alias: Object

  constructor() { }

  ngOnInit() {
    
  }

}
