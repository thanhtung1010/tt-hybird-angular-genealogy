import { Routes } from '@angular/router';
import { authActiveGuard, homeActiveGuard } from '@guards';
import { AppComponent } from './app.component';
import { ROUTE } from '@enums';

export const routes: Routes = [
  {
    path: ROUTE.HOME,
    canActivate: [homeActiveGuard],
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: ROUTE.AUTH,
    canActivate: [authActiveGuard],
    loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.HOME,
  },
];
