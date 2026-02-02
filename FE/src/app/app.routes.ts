// ================================================
// Application Routes
// ================================================
// PURPOSE:
// Define top-level application routes.
// Lazy-load feature modules for performance.
// ================================================

import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./features/auth/auth.routes").then((m) => m.AUTH_ROUTES),
  },
  {
    path: "tasks",
    canActivate: [authGuard],
    loadChildren: () =>
      import("./features/tasks/tasks.routes").then((m) => m.TASK_ROUTES),
  },
];
