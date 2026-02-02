import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="flex min-h-screen bg-white">
      <!-- Left Branding -->
      <div class="hidden lg:flex lg:w-1/2 items-center justify-center bg-blue-500 p-8">
        <div class="max-w-sm text-center lg:text-left">
          <div class="mb-12 text-6xl font-black text-white">✓</div>
          <h1 class="text-7xl font-black leading-tight mb-6 text-white">Join now</h1>
          <p class="text-xl text-blue-100">Create your account to get started with task management.</p>
        </div>
      </div>

      <!-- Right Form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8">
        <div class="w-full max-w-sm">
          <div class="mb-10">
            <h2 class="text-4xl font-bold mb-2 text-gray-900">Create account</h2>
            <p class="text-gray-600 text-lg">Let's get you started</p>
          </div>

          <form (ngSubmit)="register()" class="space-y-5">
            <div class="grid grid-cols-2 gap-3">
              <input
                [(ngModel)]="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                class="px-5 py-4 bg-white border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-500 transition hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
              <input
                [(ngModel)]="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                class="px-5 py-4 bg-white border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-500 transition hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <input
                [(ngModel)]="email"
                name="email"
                type="email"
                placeholder="Email address"
                class="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-500 transition hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <input
                [(ngModel)]="password"
                name="password"
                type="password"
                placeholder="Password"
                class="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-500 transition hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full mt-8 px-5 py-4 bg-blue-500 text-white font-bold text-lg rounded-full transition hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign up
            </button>
          </form>

          <div *ngIf="error" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {{ error }}
          </div>

          <div class="mt-10 pt-10 border-t border-gray-200">
            <p class="text-center text-gray-600 text-base">
              Already have an account?
              <a routerLink="/auth/login" class="text-blue-500 hover:text-blue-600 font-bold transition">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class RegisterComponent {
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  error = "";

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      this.error = "All fields are required";
      return;
    }

    this.authService
      .register(this.email, this.password, this.firstName, this.lastName)
      .subscribe({
        next: (response: any) => {
          if (response.success) {
            alert("Registration successful! Please login.");
            this.router.navigate(["/auth/login"]);
          } else {
            this.error = response.message || "Registration failed";
          }
        },
        error: (err: any) => {
          this.error = err.error?.message || "An error occurred";
        },
      });
  }
}
