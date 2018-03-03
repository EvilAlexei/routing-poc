import { Routes } from '@angular/router';

import { Page01Component } from './page-01/page-01.component';
import { Page02Component } from './page-02/page-02.component';
import { Page03Component } from './page-03/page-03.component';

export const routes: Routes = [
  {path: '', redirectTo: 'page-01', pathMatch: 'full'},
  {path: 'page-01', component: Page01Component},
  {path: 'page-02', component: Page02Component},
  {path: 'page-03', component: Page03Component}
];
