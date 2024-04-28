import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enableProdMode, importProvidersFrom } from '@angular/core';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, Routes, withViewTransitions } from '@angular/router';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
register();

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/home/home.component').then(mod => mod.HomeComponent),
    data: { animation: 'image' },
    children: [
      {
        path: '',
        loadComponent: () => import('./app/home/components/list/list.component').then(mod => mod.ListComponent),
        data: { animation: 'list' },
      },
      {
        path: 'menu',
        loadComponent: () => import('./app/home/components/menu/menu.component').then(mod => mod.MenuComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./app/home/components/contact/contact.component').then(mod => mod.ContactComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./app/home/components/about/about.component').then(mod => mod.AboutComponent),
      },
      {
        path: 'reservation',
        loadComponent: () => import('./app/home/components/booking/booking.component').then(mod => mod.BookingComponent),
      },
      {
        path: 'blog',
        loadComponent: () => import('./app/home/components/blog-list/blog-list.component').then(mod => mod.BlogListComponent),
      }
    ],
  },
];

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withFetch()),
    importProvidersFrom(BrowserAnimationsModule)
  ],
})
  .catch((err) => console.error(err));

