// ================================================
// Auth Feature - Routes
// ================================================

import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./presentation/pages/login.component").then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: "register",
        loadComponent: () =>
          import("./presentation/pages/register.component").then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },
];
