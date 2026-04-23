import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./pages/details/details.page').then(m => m.DetailsPage),
  },
  {
    path: 'favourites',
    loadComponent: () =>
      import('./pages/favourites/favourites.page').then(m => m.FavouritesPage),
  }
];