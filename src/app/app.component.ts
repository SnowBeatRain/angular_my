import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isNav = true;
  reg = /^home\b|order\b|passcode\b|mine\b$/;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }
  ngOnInit() {
    // 监听路由设置页面标题
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        // console.log(event);
        this.titleService.setTitle(event['title']);
      }
      );
    // 监听路由设置导航显隐
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // console.log(event);
          if (this.reg.test(event.url.substr(1))) {
            this.isNav = true;
          } else {
            this.isNav = false;
          }
        }
      }
      );
  }
}
