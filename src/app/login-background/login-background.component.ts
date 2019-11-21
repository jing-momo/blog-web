import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-background',
  templateUrl: './login-background.component.html',
  styleUrls: ['./login-background.component.css']
})
export class LoginBackgroundComponent implements OnInit {

  loginusername = localStorage.getItem('loginusername');
  loginpassword;
  picture = localStorage.getItem('picture');

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;


  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': '#ccc'
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'triangle',
        },
        move: {
          attract: {
            enable: true
          }
        }
      }
    };
  }
}
