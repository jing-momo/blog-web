import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule, NzAvatarModule, NzMenuModule} from 'ng-zorro-antd';
import {NgModule} from '@angular/core';
import {homeRout} from './home-routing';
import {LoginBackgroundComponent} from './login-background.component';
import {ParticlesModule} from 'angular-particle';
import {LiteraryComponent} from './literary/literary.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginBackgroundComponent,
    LiteraryComponent,
  ],
  imports: [
    RouterModule.forChild(homeRout),
    ParticlesModule,
    NzAvatarModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
  ]
})
export class HomeModule {
}
