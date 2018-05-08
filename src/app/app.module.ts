import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { HomelistComponent } from './homelist/homelist.component';

// 导入formsmodules模块
import { FormsModule } from '@angular/forms';

//  导入httpModule
import { HttpModule } from "@angular/http";

import { HttpClientModule } from '@angular/common/http';

import {HttpService} from './http.service'

// 路由导入
import { AppRouterModule } from './app-router.module';
import { OrderComponent } from './order/order.component';
import { PasscodeComponent } from './passcode/passcode.component';

declare var baseUrl: any;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    HomelistComponent,
    OrderComponent,
    PasscodeComponent
],
  // 指定
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
