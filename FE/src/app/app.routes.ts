// ================================================
// Application Routes
// ================================================
// PURPOSE:
// Define top-level application routes.
// Lazy-load feature modules for performance.
// ================================================

import { Routes } from '@angular/router';

export const routes: Routes = [
  // ================================================
  // EXAMPLE ROUTE STRUCTURE (implement as needed):
  // ================================================
  
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  
  // Lazy-loaded feature modules
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('@features/dashboard/dashboard.routes')
  //     .then(m => m.DASHBOARD_ROUTES)
  // },
  
  // {
  //   path: 'auth',
  //   loadChildren: () => import('@features/auth/auth.routes')
  //     .then(m => m.AUTH_ROUTES)
  // },
  
  // Wildcard route
  // {
  //   path: '**',
  //   loadComponent: () => import('@shared/components/not-found/not-found.component')
  //     .then(m => m.NotFoundComponent)
  // }
];
