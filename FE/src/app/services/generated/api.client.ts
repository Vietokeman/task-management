// ================================================
// Generated API Client from Swagger
// ================================================
// This file is auto-generated from backend Swagger
// Endpoints: Auth, Tasks

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

// ============= Auth Models =============
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  userId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiresAt?: string;
  accessTokenExpiresIn?: number;
  refreshTokenExpiresAt?: string;
  refreshTokenExpiresIn?: number;
}

// ============= Task Models =============
export interface TaskDto {
  id: string;
  title: string;
  description?: string;
  status: string;
  createdDate: string;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  status?: string;
}

export interface UpdateTaskRequest {
  id: string;
  title?: string;
  description?: string;
  status?: string;
}

// ============= Generated API Client =============
@Injectable({
  providedIn: "root",
})
export class ApiClient {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ============= Auth Endpoints =============

  authRegister(body: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, body);
  }

  authLogin(body: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, body);
  }

  authRefreshToken(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/refresh-token`, {});
  }

  authLogout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/logout`, {});
  }

  authGetMe(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.baseUrl}/auth/me`);
  }

  // ============= Task Endpoints =============

  tasksGetAll(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${this.baseUrl}/tasks`);
  }

  tasksGetById(id: string): Observable<TaskDto> {
    return this.http.get<TaskDto>(`${this.baseUrl}/tasks/${id}`);
  }

  tasksCreate(body: CreateTaskRequest): Observable<TaskDto> {
    return this.http.post<TaskDto>(`${this.baseUrl}/tasks`, body);
  }

  tasksUpdate(id: string, body: UpdateTaskRequest): Observable<TaskDto> {
    return this.http.put<TaskDto>(`${this.baseUrl}/tasks/${id}`, body);
  }

  tasksDelete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`);
  }
}
