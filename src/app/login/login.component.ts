import {Component, OnInit} from '@angular/core';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {Md5} from 'ts-md5/dist/md5';
import {GlobalhttpService} from '../globalhttp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = false;
  passwordVisible;
  password: string;
  checked: boolean;
  registerPwd: string;
  registerUserName: string;

  constructor(private api: GlobalhttpService) {
  }

  ngOnInit() {
    this.login = false;
  }


//  点击立即注册
  prompLogin() {
    this.login = true;
  }

//  点击立即登录
  prompLogin2() {
    this.login = false;
  }

  register() {
    const url = 'http://localhost:18080/blog/blog/user/registerUser';
    const param = {
      username: this.registerUserName,
      password: Md5.hashStr(this.registerPwd).toString()
    };
    this.api.postForData(url, param).then(
      data => {
        if (data.returnCode === 0) {
          alert('注册成功');
        } else {
          alert('注册失败');
        }
      },
      err => {
        console.log(err);
        alert('注册失败');
      }
    );
  }
}
