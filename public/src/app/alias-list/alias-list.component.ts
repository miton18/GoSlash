import { Component, OnInit } from '@angular/core';
import { AliasService } from '../alias.service';
import { AliasItemComponent } from '../alias-item/alias-item.component';

@Component({
  moduleId: module.id,
  selector: 'app-alias-list',
  templateUrl: 'alias-list.component.html',
  directives: [
    AliasItemComponent
  ],
  styleUrls: [
    'alias-list.component.css',
  ]
})
export class AliasListComponent implements OnInit {

  aliases: Array<any>

  constructor(private aliasService: AliasService) {
      this.aliases = []
  }

  ngOnInit() {
    this.aliases = this.aliasService.all()
  } 
}