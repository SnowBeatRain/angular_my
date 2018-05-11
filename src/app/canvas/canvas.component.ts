import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  // num: number;
  @Input() num;
  constructor() { }
  drawVerticalTab(beginX, beginY, w, h, row, list, bgColor, topNum, add) {
    var canvas: any = document.querySelector('#canvas');
    var cxt = canvas.getContext('2d');
    cxt.beginPath();
    cxt.fillStyle = bgColor; // 背景色
    // 绘制外边框
    cxt.moveTo(beginX, beginY);
    cxt.lineTo(beginX + list * w, beginY);
    cxt.lineTo(beginX + list * w, beginY + row * h);
    cxt.lineTo(beginX, beginY + row * h);
    cxt.lineTo(beginX, beginY);
    cxt.fill();
    // 绘制分割线, 内容填充
    for (let l = 1; l <= list; l++) {
      for (let r = 1; r <= row; r++) {
        cxt.moveTo(beginX, beginY + h * r);
        cxt.lineTo(beginX + list * w, beginY + h * r);
        cxt.font = 'bold 14px 宋体';
        cxt.fillStyle = '#fff';
        // 开始坐标向右移动
        if (add) {
          cxt.fillText(
            topNum++,
            beginX + (l - 1) * w + w / 8,
            beginY + h * r - h / 2
          );
        } else {
          cxt.fillText(
            topNum--,
            beginX + (l - 1) * w + w / 8,
            beginY + h * r - h / 2
          );
        }
      }
    }
    cxt.stroke();
    cxt.closePath();
  }
  // 绘制logo字体
  drawScreen() {
    var canvas: any = document.querySelector('#canvas');
    var cxt = canvas.getContext('2d');
    cxt.beginPath();
    // cxt.strokeStyle = '#374A68'; //边框颜色
    cxt.fillStyle = '#374A68'; // 填充颜色
    // cxt.lineWidth = 4;
    cxt.moveTo(40, 120);
    cxt.lineTo(90, 120);
    cxt.lineTo(90, 220);
    cxt.lineTo(40, 220);
    cxt.closePath();
    cxt.fill();
    cxt.font = 'bold 20px 宋体';
    cxt.fillStyle = '#fff';
    // cxt.fillText('快', 55, 150);
    cxt.fillText('柜', 55, 175);
    cxt.fillText('台', 55, 200);
  }
  // 绘制水平表格   一列一行  多列一行
  drawLevelTab(beginX, beginY, w, h, row, list, num) {
    var canvas: any = document.querySelector('#canvas');
    var cxt = canvas.getContext('2d');
    cxt.beginPath();
    cxt.fillStyle = '#c3c3c3'; // 背景色
    // 绘制外边框
    cxt.moveTo(beginX, beginY);
    cxt.lineTo(beginX + list * w, beginY);
    cxt.lineTo(beginX + list * w, beginY + row * h);
    cxt.lineTo(beginX, beginY + row * h);
    cxt.lineTo(beginX, beginY);
    cxt.fill();
    // 绘制分割线, 内容填充
    for (let l = 1; l <= list; l++) {
      for (let r = 1; r <= row; r++) {
        cxt.moveTo(beginX + w / l, beginY);
        cxt.lineTo(beginX + w / l, beginY + (l - 1) * h);
        cxt.font = 'bold 14px 宋体';
        cxt.fillStyle = '#fff';
        // 开始坐标向右移动

        cxt.fillText(
          num,
          beginX + (l - 1) * w / 2 + w / 2.3,
          beginY + h * r - h / 4
        );
      }
    }
    cxt.stroke();
    cxt.closePath();
  }

  drawLevelTab2(beginX, beginY, w, h, row, list, bgcolor, leftNum, add) {
    var canvas: any = document.querySelector('#canvas');
    var cxt = canvas.getContext('2d');
    cxt.beginPath();
    cxt.fillStyle = bgcolor; // 背景色
    // 绘制外边框
    cxt.moveTo(beginX, beginY);
    cxt.lineTo(beginX + w * list, beginY);
    cxt.lineTo(beginX + w * list, beginY + row * h);
    cxt.lineTo(beginX, beginY + row * h);
    cxt.lineTo(beginX, beginY);
    cxt.fill();
    // 绘制分割线, 内容填充
    for (let l = 1; l <= list; l++) {
      for (let r = 1; r <= row; r++) {
        cxt.moveTo(beginX + w * l, beginY);
        cxt.lineTo(beginX + w * l, beginY + r * h);
        cxt.font = 'bold 14px 宋体';
        cxt.fillStyle = '#fff';
        // 开始坐标向右移动
        /*
      beginX + (l- 1) * w + w / 3   基础x坐标加上第几个块,加上偏移量
      beginY + (h * r) - h / 4)   基础y坐标 加上偏移量
     */
        if (add) {
          cxt.fillText(
            leftNum++,
            beginX + (l - 1) * w + w / 3,
            beginY + h * r - h / 4
          );
        } else {
          cxt.fillText(
            leftNum--,
            beginX + (l - 1) * w + w / 3,
            beginY + h * r - h / 4
          );
        }
      }
    }
    cxt.stroke();
    cxt.closePath();
  }
  drawCanvas() {
    // var canvas: any = document.querySelector('#canvas');
    // var cxt: CanvasRenderingContext2D = canvas.getContext('2d');
    var tt = this;
    var canvas: any = document.querySelector('#canvas');
    var cxt = canvas.getContext('2d');
    cxt.fillStyle = '#fff';
    cxt.fillRect(0, 0, 1060, 620);
    var bgImg = new Image();
    bgImg.src = '../../assets/images/bg.png';
    bgImg.onload = function () {
      // 放置背景图
      cxt.drawImage(this, 0, 0);
      // 绘制快递柜文字
      cxt.beginPath();
      tt.drawScreen();
      cxt.closePath();

      // 竖直表格
      // tt.drawVerticalTab(1010, 350, 20, 40, 3, 1, '#c3c3c3', 1, true);
      tt.drawVerticalTab(50, 390, 20, 40, 3, 1, '#c3c3c3', 68, false);
      tt.drawVerticalTab(240, 115, 20, 40, 2, 1, '#c3c3c3', 77, false);
      tt.drawVerticalTab(172, 410, 20, 40, 2, 1, '#c3c3c3', 62, true);
      tt.drawVerticalTab(222, 370, 20, 40, 3, 1, '#c3c3c3', 61, false);
      tt.drawVerticalTab(340, 435, 20, 40, 1, 1, '#c3c3c3', 56, false);
      tt.drawVerticalTab(370, 435, 20, 40, 1, 1, '#c3c3c3', 36, false);
      tt.drawVerticalTab(1015, 350, 20, 40, 3, 1, '#c3c3c3', 1, true);
      // 水平表格 一行多列
      //  开始横坐标，开始纵坐标，单个宽度，单个高度，几行，几列，背景颜色，第一个数字，数字是否递增（true增加）
      tt.drawLevelTab2(160, 90, 40, 20, 1, 2, '#c3c3c3', 79, false);
      tt.drawLevelTab2(160, 200, 40, 20, 1, 2, '#c3c3c3', 74, true);
      tt.drawLevelTab2(82, 370, 40, 20, 1, 2, '#c3c3c3', 69, true);
      tt.drawLevelTab2(82, 490, 40, 20, 1, 2, '#c3c3c3', 65, false);
      tt.drawLevelTab2(250, 490, 40, 20, 1, 2, '#c3c3c3', 58, false);
      tt.drawLevelTab2(435, 330, 40, 20, 1, 7, '#c3c3c3', 55, false);
      tt.drawLevelTab2(435, 390, 40, 20, 1, 6, '#c3c3c3', 48, false);
      tt.drawLevelTab2(435, 410, 40, 20, 1, 6, '#c3c3c3', 42, false);
      tt.drawLevelTab2(745, 330, 40, 20, 1, 6, '#c3c3c3', 9, false);
      tt.drawLevelTab2(745, 390, 40, 20, 1, 6, '#c3c3c3', 15, false);
      tt.drawLevelTab2(745, 410, 40, 20, 1, 6, '#c3c3c3', 21, false);
      tt.drawLevelTab2(395, 490, 40, 20, 1, 8, '#c3c3c3', 35, false);
      tt.drawLevelTab2(745, 490, 40, 20, 1, 6, '#c3c3c3', 27, false);

      // 判断是哪一个快递柜
      switch (true) {
        case tt.num >= 1 && tt.num <= 3:
          tt.drawVerticalTab(1010, 350, 20, 40, 3, 1, '#3470cb', 1, true);
          break;
        case tt.num >= 4 && tt.num <= 9:
          tt.drawLevelTab2(745, 330, 40, 20, 1, 6, '#3470cb', 9, false);
          break;
        case tt.num >= 10 && tt.num <= 15:
          tt.drawLevelTab2(745, 390, 40, 20, 1, 6, '#3470cb', 15, false);
          break;
        case tt.num >= 15 && tt.num <= 21:
          tt.drawLevelTab2(745, 410, 40, 20, 1, 6, '#3470cb', 21, false);
          break;
        case tt.num >= 22 && tt.num <= 27:
          tt.drawLevelTab2(745, 490, 40, 20, 1, 6, '#3470cb', 27, false);
          break;
        case tt.num >= 28 && tt.num <= 35:
          tt.drawLevelTab2(395, 490, 40, 20, 1, 8, '#3470cb', 35, false);
          break;
        case tt.num === 36:
          tt.drawVerticalTab(370, 435, 20, 40, 1, 1, '#3470cb', 36, false);
          break;
        case tt.num >= 37 && tt.num <= 42:
          tt.drawLevelTab2(435, 410, 40, 20, 1, 6, '#3470cb', 42, false);
          break;
        case tt.num >= 43 && tt.num <= 48:
          tt.drawLevelTab2(435, 390, 40, 20, 1, 6, '#3470cb', 48, false);
          break;
        case tt.num >= 49 && tt.num <= 55:
          tt.drawLevelTab2(435, 330, 40, 20, 1, 7, '#3470cb', 55, false);
          break;
        case tt.num === 56:
          tt.drawVerticalTab(340, 435, 20, 40, 1, 1, '#3470cb', 56, false);
          break;
        case tt.num >= 57 && tt.num <= 58:
          tt.drawLevelTab2(250, 490, 40, 20, 1, 2, '#3470cb', 58, false);
          break;
        case tt.num >= 59 && tt.num <= 61:
          tt.drawVerticalTab(222, 370, 20, 40, 3, 1, '#3470cb', 61, false);
          break;
        case tt.num >= 62 && tt.num <= 63:
          tt.drawVerticalTab(172, 410, 20, 40, 2, 1, '#3470cb', 62, true);
          break;
        case tt.num >= 64 && tt.num <= 65:
          tt.drawLevelTab2(82, 490, 40, 20, 1, 2, '#3470cb', 65, false);
          break;
        case tt.num >= 66 && tt.num <= 68:
          tt.drawVerticalTab(50, 390, 20, 40, 3, 1, '#3470cb', 68, false);
          break;
        case tt.num >= 69 && tt.num <= 70:
          tt.drawLevelTab2(82, 370, 40, 20, 1, 2, '#3470cb', 69, true);
          break;
        case tt.num >= 74 && tt.num <= 75:
          tt.drawLevelTab2(160, 200, 40, 20, 1, 2, '#3470cb', 74, true);
          break;
        case tt.num >= 76 && tt.num <= 77:
          tt.drawVerticalTab(240, 115, 20, 40, 2, 1, '#3470cb', 77, false);
          break;
        case tt.num >= 78 && tt.num <= 79:
          tt.drawLevelTab2(160, 90, 40, 20, 1, 2, '#3470cb', 79, false);
          break;
        default:
          break;
      }


      // 绘制过道线条

      cxt.beginPath();
      cxt.strokeStyle = '#3470cb'; // 填充颜色
      cxt.lineWidth = 4;
      cxt.moveTo(270, 75);
      cxt.lineTo(270, 217);
      cxt.moveTo(270, 217);
      cxt.lineTo(1060, 217);
      cxt.closePath();
      cxt.stroke();
      cxt.beginPath();
      cxt.strokeStyle = '#3470cb'; // 填充颜色
      cxt.lineWidth = 4;
      cxt.moveTo(270, 255);
      cxt.lineTo(270, 320);
      cxt.moveTo(270, 320);
      cxt.lineTo(715, 320);
      cxt.closePath();
      cxt.stroke();
      cxt.beginPath();
      cxt.strokeStyle = '#3470cb'; // 填充颜色
      cxt.lineWidth = 4;
      cxt.moveTo(745, 320);
      cxt.lineTo(985, 320);
      cxt.closePath();
      cxt.stroke();
      cxt.beginPath();
      cxt.strokeStyle = '#3470cb'; // 填充颜色
      cxt.lineWidth = 4;
      cxt.moveTo(1015, 320);
      cxt.lineTo(1060, 320);
      cxt.closePath();
      cxt.stroke();
    };

  }

  ngOnInit() {
    this.drawCanvas();
  }

}
