import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Control } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(fb: FormBuilder) { }

  ngOnInit() {
    let form = new ControlGroup({
      userid: new Control(),
      password: new Control()
    })
  }

  tryAuth() {

  }
}
