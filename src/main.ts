import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
window.onresize = function () {
  calcRam();
};
function calcRam() {
  var html = document.querySelector('html');
  var w = document.documentElement.clientWidth;
  // 字体10px
  html.style.fontSize = w / 37.5 + 'px';
}
calcRam();
platformBrowserDynamic().bootstrapModule(AppModule);
