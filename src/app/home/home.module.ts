import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page01Component } from './page-01/page-01.component';
import { Page02Component } from './page-02/page-02.component';
import { Page03Component } from './page-03/page-03.component';
import { routes as childRoutes } from './home.routing';

@NgModule({
  declarations: [
    Page01Component,
    Page02Component,
    Page03Component
  ],
  imports: [
    RouterModule.forRoot(childRoutes)
  ],
  providers: []
})
export class HomeModule {}
