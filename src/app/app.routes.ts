import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.CorrectComponent), // Replace CorrectComponent with the correct exported component
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];