import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'favourites',
        loadComponent: () =>
          import('./pages/favourites/favourites.page').then(m => m.FavouritesPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/details/details.page').then(m => m.DetailsPage)
  }
];