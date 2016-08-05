import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-material-input',
  templateUrl: 'material-input.component.html',
  styleUrls: ['material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  @Input() inputType: string
  @Input() name: string
  @Input() placeholder: string  
  //@Output() value :string
  value: string

  constructor() {
    this.value = ""  
  }

  ngOnInit() {
  }
}
