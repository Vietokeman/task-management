// ================================================
// Task Feature - Routes
// ================================================

import { Routes } from "@angular/router";

export const TASK_ROUTES: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./presentation/pages/task-list.component").then(
            (m) => m.TaskListComponent
          ),
      },
    ],
  },
];
