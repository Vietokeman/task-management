// ================================================
// Shared Layer - Button Component
// ================================================
// PURPOSE:
// Reusable button component.
// Supports different variants, sizes, loading state.
// ================================================

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Button template -->
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  // Inputs: variant, size, disabled, loading
}
