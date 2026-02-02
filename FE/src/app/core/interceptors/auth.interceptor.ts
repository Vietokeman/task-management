// ================================================
// Core Layer - Auth Interceptor
// ================================================
// PURPOSE:
// HTTP interceptor for authentication.
// Attaches JWT token to outgoing requests.
// Uses functional interceptor pattern (Angular 15+).
// ================================================

import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { catchError, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getAccessToken();

  // Clone request with Authorization header
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      // Handle 401 Unauthorized
      if (error.status === 401) {
        authService.clearTokens();
      }
      return throwError(() => error);
    })
  );
};

