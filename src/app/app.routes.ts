import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Adjust the path to the actual location of home.page.ts

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  // Add other routes here
];

export const appRoutes = RouterModule.forRoot(routes);
