import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    data: { animation: 'HomePage' }
  },
  { 
    path: 'rooms', 
    loadComponent: () => import('./features/rooms/rooms.component').then(m => m.RoomsComponent),
    data: { animation: 'RoomsPage' }
  },
  { 
    path: 'gallery', 
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent),
    data: { animation: 'GalleryPage' }
  },
  { 
    path: 'travel', 
    loadComponent: () => import('./features/transport/transport.component').then(m => m.TransportComponent),
    data: { animation: 'TravelPage' }
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    data: { animation: 'ContactPage' }
  },
  { path: '**', redirectTo: '' }
];
