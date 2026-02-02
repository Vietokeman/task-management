// ================================================
// Angular Application Entry Point
// ================================================
// PURPOSE:
// Bootstrap the Angular application.
// Configure providers and application-wide settings.
// ================================================

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
