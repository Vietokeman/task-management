// ================================================
// Core Layer - Auth Guard
// ================================================
// PURPOSE:
// Route guard for authenticated routes.
// Redirects to login if not authenticated.
// Uses functional guard pattern (Angular 15+).
// ================================================

import { inject } from "@angular/core";
import { Router, CanActivateFn } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.hasToken()) {
    return true;
  }

  // Redirect to login if not authenticated
  router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  return false;
};

