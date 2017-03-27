import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {UIRouterModule} from 'ui-router-ng2';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { HelloSidebarComponent } from './hello-sidebar/hello-sidebar.component';
import { AboutSidebarComponent } from './about-sidebar/about-sidebar.component';

const helloState = { name: 'hello', url: '/hello',
  views: {
    content: {component: HelloComponent},
    sidebar: {component: HelloSidebarComponent}
  }
};
const aboutState = { name: 'about', url: '/about',
  views: {
    content: {component: AboutComponent},
    sidebar: {component: AboutSidebarComponent}
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    HelloSidebarComponent,
    AboutSidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    UIRouterModule.forRoot({ states: [
      helloState, aboutState
    ], useHash: false })

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
