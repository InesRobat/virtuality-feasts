import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'virtuality-feasts';

  constructor(public contexts: ChildrenOutletContexts) { }

  public getRouterOutletState(outlet: { isActivated: any; activatedRoute: any; }) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  // public getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.children[0].snapshot?.data?.['animation'];
  // }

  // public prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  //   );
  // }
}
