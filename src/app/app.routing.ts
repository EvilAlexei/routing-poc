import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Page03Component } from './home/page-03/page-03.component';
import { Page02Component } from './home/page-02/page-02.component';
import { Page01Component } from './home/page-01/page-01.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'page-01', pathMatch: 'full'},
      {path: 'page-01', component: Page01Component},
      {path: 'page-02', component: Page02Component},
      {path: 'page-03', component: Page03Component}
    ]},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
];
