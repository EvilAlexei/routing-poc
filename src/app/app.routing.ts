import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { routes as childRoutes } from './home/home.routing';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: childRoutes},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
];
