import { Component, OnInit } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordVisible
  password
  checked

  constructor() { }

  ngOnInit() {
  }

}
