import { Component, OnInit } from '@angular/core'
import { AliasService } from '../alias.service'
import { AliasItemComponent } from '../alias-item/alias-item.component'
import { AliasNewComponent } from '../alias-new'
import { Alias } from '../alias.class'

@Component({
  moduleId: module.id,
  selector: 'app-alias-list',
  templateUrl: 'alias-list.component.html',
  directives: [
    AliasItemComponent,
    AliasNewComponent
  ],
  styleUrls: [
    'alias-list.component.css',
  ]
})
export class AliasListComponent implements OnInit {

  aliases: Array<Alias>

  constructor(private aliasService: AliasService) {
      this.aliases = []
  }

  ngOnInit() {
    this.aliases = this.aliasService.all()
  } 
}