import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
    console.log($(".navlist"))
    // $(".navlist").click(function (e) {
    //   $(e.currentTarget).addClass("active") //给点击的元素添加class
    //   $(e.currentTarget).siblings()//兄弟节点
    //   $($(e.currentTarget).siblings()).removeClass("active")
    // })
  }
}
