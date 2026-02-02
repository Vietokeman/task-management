// ================================================
// Shared Layer - Modal Component
// ================================================
// PURPOSE:
// Reusable modal/dialog component.
// Supports header, body, footer slots.
// ================================================

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Modal template -->
    <div class="modal-overlay">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ModalComponent {
  // Inputs: isOpen, title
  // Outputs: closed
}
