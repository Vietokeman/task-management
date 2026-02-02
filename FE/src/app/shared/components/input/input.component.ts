// ================================================
// Shared Layer - Input Component
// ================================================
// PURPOSE:
// Reusable form input component.
// Supports validation display, labels, hints.
// ================================================

import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Input template -->
    <div class="input-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class InputComponent {
  // Inputs: label, placeholder, error, hint
}
