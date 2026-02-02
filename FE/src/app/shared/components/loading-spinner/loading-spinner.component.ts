// ================================================
// Shared Layer - Loading Spinner Component
// ================================================
// PURPOSE:
// Reusable loading indicator.
// Supports different sizes and colors.
// ================================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Loading spinner template -->
    <div class="spinner"></div>
  `,
  styles: []
})
export class LoadingSpinnerComponent {
  // Inputs: size, color
}
