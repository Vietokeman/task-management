import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="login-container">
      <div class="login-box">
        <h1>Task Management</h1>
        <h2>Login</h2>

        <form (ngSubmit)="login()">
          <div class="form-group">
            <label>Email</label>
            <input
              [(ngModel)]="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              [(ngModel)]="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" class="btn-login">Login</button>

          <p class="register-link">
            Don't have an account?
            <a routerLink="/auth/register">Register here</a>
          </p>
        </form>

        <p *ngIf="error" class="error-message">{{ error }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .login-box {
        background: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 400px;
      }

      h1 {
        color: #667eea;
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
      }

      h2 {
        color: #333;
        font-size: 20px;
        margin-bottom: 20px;
        text-align: center;
      }

      .form-group {
        margin-bottom: 15px;
      }

      label {
        display: block;
        margin-bottom: 5px;
        color: #555;
        font-weight: 500;
      }

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
        box-sizing: border-box;
      }

      input:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
      }

      .btn-login {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 20px;
      }

      .btn-login:hover {
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
      }

      .register-link {
        text-align: center;
        margin-top: 15px;
        color: #666;
      }

      .register-link a {
        color: #667eea;
        text-decoration: none;
        font-weight: bold;
      }

      .register-link a:hover {
        text-decoration: underline;
      }

      .error-message {
        color: #dc3545;
        margin-top: 15px;
        padding: 10px;
        background-color: #f8d7da;
        border-radius: 5px;
        text-align: center;
      }
    `,
  ],
})
export class LoginComponent {
  email = "";
  password = "";
  error = "";

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (!this.email || !this.password) {
      this.error = "Email and password are required";
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.router.navigate(["/tasks"]);
        } else {
          this.error = response.message || "Login failed";
        }
      },
      error: (err: any) => {
        this.error = err.error?.message || "An error occurred";
      },
    });
  }
}
