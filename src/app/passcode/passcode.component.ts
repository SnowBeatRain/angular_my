import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

// import { JsBarcode } from '../../assets/js/JsBarcode.all.min.js';
// import * as JsBarcode from '../../assets/js/JsBarcode.all.min.js';
declare var JsBarcode: any;
@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.css']
})
export class PasscodeComponent implements OnInit {
  userInfo: any = {};
  orderList = [];
  SysTime: '';
  InviteCode: '';
  timeNum: 0;
  isShua: false; // 是否点击刷新条形码
  websock: '';
  // 随机生成8位数
  numArr = [];
  data: '1234567890';
  constructor(
    private HttpService: HttpService
  ) { }

  // 获取用户信息
  getUserInfo() {
    this.HttpService.passcodeUserInfo().subscribe((data) => {
      this.userInfo = data.Result;
      this.InviteCode = data.Result.InviteCode;
      JsBarcode(
        document.getElementById('barcode'), this.InviteCode,
        {
          displayValue: true
        }
      );
    });
  }
  // 刷新条码
  isShuaIcon() {
  }
  ngOnInit() {
    this.getUserInfo();
  }

}
