import { TestBed, async } from '@angular/core/testing';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SidenavOverviewExample } from './sidenav/sidenav-overview-example';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '@angular/material';
import {UIRouterModule} from 'ui-router-ng2';

import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot(), UIRouterModule.forRoot() ],
      declarations: [
        AppComponent,
        SidenavOverviewExample,
        HelloComponent,
        AboutComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Demo!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Demo');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Demo');
  }));
});
