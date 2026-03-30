import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'rooms', loadComponent: () => import('./features/rooms/rooms.component').then(m => m.RoomsComponent) },
  { path: 'gallery', loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
