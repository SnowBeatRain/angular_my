import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 导入路由
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MineComponent } from "./mine/mine.component";
import { HomelistComponent } from './homelist/homelist.component'

//通过RouterModule.forRoot制定具体的路由规则。
const routes: Routes = [
  {
    //由于设置了base href，所以路径前不用再加/
    path: "home",
    component: HomeComponent
  },
  {
    path: "homelist",
    component: HomelistComponent
  },
  {
    path: "mine",
    component: MineComponent
  },
  //路由重定向
  // {
  //   path: "",
  //   redirectTo: "home",
  //   pathMatch: "full"
  // }
]

@NgModule({
  // 如果使用路由  以下两个必不可少
  /*
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  */
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
