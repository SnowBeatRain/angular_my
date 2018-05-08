import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

  constructor() { }
  yourSelfInfo: {
    Number: "",
    DeliveryUser: "",
    DeliveryPhone: ""
  }
  lookMap() {
    console.log("点击了放大")
  }
  ngOnInit() {
    var info = JSON.parse(localStorage.getItem("yourselfInfo"));
    this.yourSelfInfo = info
  }

}
