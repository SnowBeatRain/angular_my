import { Component, OnInit } from '@angular/core';

// declare var $: any;  //使用jquery、建议不要使用 会出现出现浏览器加载缓冲期，

// 导入服务
import { HttpService } from '../http.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = "baidu";
  student = {
    pageIndex: 1,
    pageSize: 15,
    status: -1
  }
  constructor(
    private HttpService: HttpService
  ) { }

  onclick() {
    // $.get("http://api.nihaotop.com/api/Home/PCInfo", this.student)
    // .done((res)=>{
    //   console.log(res)
    // })
    // this.HttpService.getInfo(this.student)
    this.HttpService.getInfo(this.student).subscribe((r) => {});
  }
  ngOnInit() {
  }

}
