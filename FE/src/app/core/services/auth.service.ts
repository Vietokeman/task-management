import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import {
  ApiClient,
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../../services/generated/api.client";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken(),
  );
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private apiClient: ApiClient) {}

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Observable<AuthResponse> {
    return this.apiClient.authRegister({
      email,
      password,
      firstName,
      lastName,
    });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.apiClient.authLogin({ email, password }).pipe(
      tap((response) => {
        if (response.success && response.accessToken) {
          this.setTokens(response.accessToken, response.refreshToken || "");
          this.isAuthenticatedSubject.next(true);
        }
      }),
    );
  }

  refreshToken(): Observable<AuthResponse> {
    return this.apiClient.authRefreshToken().pipe(
      tap((response) => {
        if (response.success && response.accessToken) {
          this.setTokens(response.accessToken, response.refreshToken || "");
        }
      }),
    );
  }

  logout(): Observable<any> {
    return this.apiClient.authLogout().pipe(
      tap(() => {
        this.clearTokens();
        this.isAuthenticatedSubject.next(false);
      }),
    );
  }

  getMe(): Observable<AuthResponse> {
    return this.apiClient.authGetMe();
  }

  setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  hasToken(): boolean {
    return !!localStorage.getItem("access_token");
  }

  getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  getRefreshToken(): string | null {
    return localStorage.getItem("refresh_token");
  }
}
