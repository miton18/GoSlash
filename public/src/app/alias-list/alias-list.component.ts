import { Component, OnInit } from '@angular/core';
import { AliasService } from '../alias.service';

@Component({
  moduleId: module.id,
  selector: 'app-alias-list',
  templateUrl: 'alias-list.component.html',
  styleUrls: [
    'alias-list.component.css',
  ],
  providers: [AliasService]
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
