import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'virtuality-feasts';

  constructor(private contexts: ChildrenOutletContexts) { }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.children[0].snapshot?.data?.['animation'];
  }

  // public prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  //   );
  // }
}
