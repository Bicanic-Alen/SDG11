import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Goal11Angular';




  prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}
}
