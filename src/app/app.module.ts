import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {UIRouterModule} from 'ui-router-ng2';

import { AppComponent } from './app.component';
import { SidenavOverviewExample } from './sidenav/sidenav-overview-example';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';



const helloState = { name: 'hello', url: '/hello',  component: HelloComponent };
const aboutState = { name: 'about', url: '/about',  component: AboutComponent };

@NgModule({
  declarations: [
    AppComponent,
    SidenavOverviewExample,
    HelloComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    UIRouterModule.forRoot({ states: [
      helloState, aboutState
    ], useHash: true })

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
