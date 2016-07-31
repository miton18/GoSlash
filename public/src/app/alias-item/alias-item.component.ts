import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-alias-item',
  templateUrl: 'alias-item.component.html',
  styleUrls: ['alias-item.component.css']
})
export class AliasItemComponent implements OnInit {
  
  @Input() alias: Object

  constructor() { }

  ngOnInit() {
  }

}
