// ================================================
// Root App Component
// ================================================
// PURPOSE:
// Root component that bootstraps the application.
// Contains router outlet for navigation.
// ================================================

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- Application Shell -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  // Root component - minimal logic, delegates to feature modules
}
