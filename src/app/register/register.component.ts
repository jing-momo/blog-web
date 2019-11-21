import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GlobalhttpService} from '../globalhttp.service';
import {UrlConfig} from '../urlConfig/UrlConfig';
import {Md5} from 'ts-md5/dist/md5';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: boolean;
  checked = false;
  registerUserName;
  registerPwd;
  passwordVisible;
  @Output() changeStatu = new EventEmitter();

  constructor(private api: GlobalhttpService) {
  }

  ngOnInit() {
  }
// 立即登录
  changeStas() {
    this.changeStatu.emit({login: true});
  }

  // 注册
  register() {
    const url = UrlConfig.getLoginUser;
    const param = {
      username: this.registerUserName,
      password: Md5.hashStr(this.registerPwd).toString(),
    };
    this.api.postForData(url, param).then(
      data => {
        if (data.returnCode === 0) {
          alert('注册成功');
        } else {
          alert('注册失败');
        }
        console.log(data.returnCode);
      },
      err => {
        console.log(err);
        alert('注册失败');
      }
    );
  }

}
