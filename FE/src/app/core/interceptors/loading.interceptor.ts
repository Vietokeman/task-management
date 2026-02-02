// ================================================
// Core Layer - Loading Interceptor
// ================================================
// PURPOSE:
// HTTP interceptor for loading state.
// Shows/hides global loading indicator.
// Tracks pending requests.
// ================================================

import { HttpInterceptorFn } from "@angular/common/http";
import { finalize } from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // Implementation:
  // - Increment loading counter on request
  // - Decrement on response/error
  // - Show/hide global loader based on counter

  return next(req).pipe(
    finalize(() => {
      // Hide loader when request completes
    }),
  );
};
