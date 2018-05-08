import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  isnoEmpty: true
  isShowMore: false
  pageIndex: 1
  pageSize: 20
  packList = [] //包裹列表
  IsNext: true //是否下一页
  kaiguan: false
  daishouShow: true //待收显示
  yishouShow: true //已收显示
  constructor(
    private router: Router,
    private HttpService: HttpService
  ) { }

  getInfo() {
    this.HttpService.getInfo(this.student).subscribe((data) => {
      if (data.Status == 1) {
        // 如果是第一页直接赋值。若不是第一页则合并数据
        if (this.pageIndex == 1) {
          this.packList = data.Result.List;
        } else {
          this.packList = this.packList.concat(data.Result.List);
        }
        this.IsNext = data.Result.IsNext;
        this.pageIndex++;
        // if (data.Result.IsNext == false) {
        //   this.isShowMore = false;
        // } else {
        //   this.isShowMore = true;
        // }
        // if (data.Result.List.length < 1) {
        //   this.isnoEmpty = false;
        // } else {
        //   this.isnoEmpty = true;
        // }
        var typeString0 = JSON.stringify({
          Type: 0
        })
          .split("}")[0]
          .split("{")[1];
        var typeString1 = JSON.stringify({
          Type: 1
        })
          .split("}")[0]
          .split("{")[1];
        var choice0 = JSON.stringify(this.packList).indexOf(typeString0);
        var choice1 = JSON.stringify(this.packList).indexOf(typeString1);
        // if (choice0 != -1) {
        //   this.daishouShow = true;
        // } else {
        //   this.daishouShow = false;
        // }
        // if (choice1 != -1) {
        //   this.yishouShow = true;
        // } else {
        //   this.yishouShow = false;
        // }
      } else if (data.Status == 40033) {
        alert(data.Result);
        // window.location.href = "#//login";
      } else {
        alert(data.Result);
        // window.location.href = "#//error";
      }
    });
  }

  // l: { Shelf: string }    或者l:any
  clickYourSelf(l: { Shelf: string }): void {
    localStorage.setItem("yourselfInfo", JSON.stringify(l));
    this.router.navigate(['/homelist', l.Shelf]);
  };
  scrollBackTop(): void {

  }
  ngOnInit() {
    this.getInfo()
  }

}
