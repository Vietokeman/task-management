// ================================================
// Core Layer - API Service
// ================================================
// PURPOSE:
// Base HTTP client wrapper for API calls.
// Centralizes HTTP configuration and error handling.
// Used by feature-level data services.
// ================================================

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Implementation:
  // - Generic GET, POST, PUT, DELETE methods
  // - Base URL configuration
  // - Request/response transformation
}
