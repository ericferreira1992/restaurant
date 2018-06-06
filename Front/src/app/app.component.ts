import { Component, ViewContainerRef } from '@angular/core';
import { Global } from './core/global';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

    constructor(public vcr: ViewContainerRef,
                public g: Global)
    {
        this.g.rootView = vcr;
    }

    title = 'app';
}
