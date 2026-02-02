// ================================================
// Shared Layer - Pagination Component
// ================================================
// PURPOSE:
// Reusable pagination component.
// Supports page size, current page, total items.
// ================================================

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Pagination template -->
    <nav class="pagination">
      <ng-content></ng-content>
    </nav>
  `,
  styles: [],
})
export class PaginationComponent {
  // Inputs: currentPage, pageSize, totalItems
  // Outputs: pageChange
}
