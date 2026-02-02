// ================================================
// Core Layer - Constants
// ================================================
// PURPOSE:
// Application-wide constant values.
// API endpoints, storage keys, etc.
// ================================================

export const APP_CONSTANTS = {
  // API Configuration
  // API_BASE_URL: environment.apiUrl,

  // Storage Keys
  STORAGE_KEYS: {
    ACCESS_TOKEN: "access_token",
    REFRESH_TOKEN: "refresh_token",
    USER: "current_user",
  },

  // Pagination Defaults
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  },
};
