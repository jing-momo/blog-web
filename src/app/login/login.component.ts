import {Component, OnInit} from '@angular/core';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {Md5} from 'ts-md5/dist/md5';
import {GlobalhttpService} from '../globalhttp.service';
import {UrlConfig} from '../urlConfig/UrlConfig';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginusername: string;
  login = false;
  passwordVisible;
  loginpassword: string;
  checked = true;
  registerPwd: string;
  registerUserName: string;
  picture: string;
  description: string;

  constructor(private api: GlobalhttpService) {
  }

  ngOnInit() {
    this.login = false;
    this.loginusername = localStorage.getItem('loginusername');
    this.loginpassword = localStorage.getItem('loginpassword');
    this.picture = localStorage.getItem('picture');
  }


//  点击立即注册
  prompLogin() {
    this.login = true;
  }

//  点击立即登录
  prompLogin2() {
    this.login = false;
  }

// 注册
  register() {
    const url = UrlConfig.getLoginUser;
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

// 出现头像
  loginUsername() {
    const url = UrlConfig.redirectLogin + '?username=' + this.loginusername + '&password=' + this.loginpassword;
    const param = {
      username: this.loginusername,
      password: this.loginpassword,
    };
    this.api.postForData(url, param).then(
      data => {
        this.description = data.description;
        if (data.returnCode === 0) {
          localStorage.setItem('loginusername', this.loginusername);
          localStorage.setItem('picture', data.result.image);
          if (this.checked) {
            localStorage.setItem('loginpassword', this.loginpassword);
          } else {
            localStorage.removeItem('loginpassword');
          }
          this.picture = data.result.image;
        } else {
          console.log('账号或密码错误');
        }
      },
      err => {
        console.log(err);
      }
    );
  }


}
