// ================================================
// Core Layer - Storage Service
// ================================================
// PURPOSE:
// Abstraction over browser storage (localStorage/sessionStorage).
// Type-safe storage operations.
// Enables mocking in tests.
// ================================================

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  // Implementation:
  // - getItem<T>(key): T | null
  // - setItem<T>(key, value): void
  // - removeItem(key): void
  // - clear(): void
}
