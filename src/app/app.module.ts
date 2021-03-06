import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FormLoginComponent} from './form-login/form-login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ParticlesModule} from 'angular-particle';
import { LiteraryComponent } from './login-background/literary/literary.component';
import {HomeModule} from './login-background/home.module';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ParticlesModule,
    HomeModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
