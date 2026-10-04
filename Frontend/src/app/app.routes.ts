import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursComponent } from './pages/tours/tours.component';
import { ToursListComponent } from './pages/tours-list/tours-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ToursComponent },
  { path: 'tours', component: ToursListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
