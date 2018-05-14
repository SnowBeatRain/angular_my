import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 导入路由
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { HomelistComponent } from './homelist/homelist.component';
import { PasscodeComponent } from './passcode/passcode.component';
import { OrderComponent } from './order/order.component';
import { ErrorComponent } from './error/error.component';

// 通过RouterModule.forRoot制定具体的路由规则。
const routes: Routes = [
  {
    // 由于设置了base href，所以路径前不用再加/
    path: 'home',
    component: HomeComponent,
    data: { title: '包裹' }
  },
  {
    path: 'homelist/:num',
    component: HomelistComponent,
    data: { title: '自取' }
  },
  {
    path: 'mine',
    component: MineComponent,
    data: { title: '个人中心' }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: { title: '订单' }
  },
  {
    path: 'passcode',
    component: PasscodeComponent,
    data: { title: '通行码' }
  },
  // 路由重定向
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // 页面未找到
  { path: '**', component: ErrorComponent }
];

@NgModule({
  // 如果使用路由  以下两个必不可少
  /*
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  */

  /*
  angular2提供的路由策略也是基于上面两个原理实现的，
  可以在@NgModule中通过providers配置或RouterModule.forRoot(routes, { useHash: true })配置
  useHash: true  使用hash  带有#
  */
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true })
  ],
  // providers: [
  //   { provide: LocationStrategy, useClass: HashLocationStrategy }
  // ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
