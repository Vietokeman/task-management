// ================================================
// Core Layer - Auth Interceptor
// ================================================
// PURPOSE:
// HTTP interceptor for authentication.
// Attaches JWT token to outgoing requests.
// Uses functional interceptor pattern (Angular 15+).
// ================================================

import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Implementation:
  // - Get token from AuthService
  // - Clone request with Authorization header
  // - Pass to next handler
  
  return next(req); // Placeholder
};
