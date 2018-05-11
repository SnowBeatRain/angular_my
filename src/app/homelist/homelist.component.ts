import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

  constructor() { }
  yourSelfInfo: {
    Number: '',
    DeliveryUser: '',
    DeliveryPhone: ''
  };
  lookMap() {
    console.log('点击了放大');
  }
  ngOnInit() {
    const info = JSON.parse(localStorage.getItem('yourselfInfo'));
    this.yourSelfInfo = info;

    // var canvas = document.querySelector("#canvas");
    // var cxt = canvas.getContext("2d");
    // var canvas: any = document.querySelector("#canvas");
    // var cxt: CanvasRenderingContext2D = canvas.nativeElement.getContext("2d");
  }

}
