// ================================================
// Shared Layer - Debounce Click Directive
// ================================================
// PURPOSE:
// Prevents rapid multiple clicks.
// Useful for form submissions.
// ================================================

import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
  selector: "[appDebounceClick]",
  standalone: true,
})
export class DebounceClickDirective {
  // Implementation: Debounce click events
}
