import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    providers: [],
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.component').then((c) => c.SearchComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
