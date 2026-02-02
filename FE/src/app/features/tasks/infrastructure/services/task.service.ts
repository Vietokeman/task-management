// ================================================
// Task Feature - Infrastructure Service
// ================================================

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiClient, TaskDto, CreateTaskRequest, UpdateTaskRequest } from "../../../../services/generated/api.client";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private apiClient: ApiClient) {}

  getAllTasks(): Observable<TaskDto[]> {
    return this.apiClient.tasksGetAll();
  }

  getTaskById(id: string): Observable<TaskDto> {
    return this.apiClient.tasksGetById(id);
  }

  createTask(request: CreateTaskRequest): Observable<TaskDto> {
    return this.apiClient.tasksCreate(request);
  }

  updateTask(id: string, request: UpdateTaskRequest): Observable<TaskDto> {
    return this.apiClient.tasksUpdate(id, request);
  }

  deleteTask(id: string): Observable<void> {
    return this.apiClient.tasksDelete(id);
  }
}

