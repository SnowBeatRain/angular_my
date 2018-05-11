import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  num: number;
  constructor() { }

  //   var canvas: any = document.querySelector("#canvas");
  //   var cxt: CanvasRenderingContext2D = canvas.nativeElement.getContext("2d");

  ngOnInit() {
  }

}
