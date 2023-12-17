import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact page'
  }
];
