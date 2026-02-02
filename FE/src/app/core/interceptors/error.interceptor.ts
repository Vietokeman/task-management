// ================================================
// Core Layer - Error Interceptor
// ================================================
// PURPOSE:
// HTTP interceptor for error handling.
// Catches HTTP errors and handles globally.
// Shows notifications, redirects on 401/403.
// ================================================

import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Implementation:
      // - Handle 401: Redirect to login
      // - Handle 403: Show forbidden message
      // - Handle 500: Show generic error
      // - Log error details

      return throwError(() => error);
    }),
  );
};
