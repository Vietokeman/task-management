import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskService } from "../../infrastructure/services/task.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../../core/services/auth.service";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex min-h-screen bg-white">
      <!-- Sidebar -->
      <aside class="w-64 border-r border-gray-200 bg-white sticky top-0 h-screen flex flex-col">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span class="text-xl font-black text-white">✓</span>
            </div>
            <span class="text-xl font-black text-gray-900">Tasks</span>
          </div>

          <nav class="space-y-1">
            <div class="px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition text-base font-semibold flex items-center gap-3 text-gray-900">
              <span class="text-xl">📋</span>
              <span>My Tasks</span>
            </div>
          </nav>
        </div>

        <div class="mt-auto p-6 border-t border-gray-200">
          <button
            (click)="logout()"
            class="w-full px-5 py-3 bg-white border border-gray-300 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition text-base"
          >
            Logout
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 max-w-4xl mx-auto border-x border-gray-200">
        <!-- Header -->
        <div class="sticky top-0 backdrop-blur-md bg-white/90 border-b border-gray-200 px-6 py-4 z-10">
          <h1 class="text-xl font-black text-gray-900">My Tasks</h1>
        </div>

        <!-- Create Button -->
        <div class="border-b border-gray-200 px-6 py-4 bg-white">
          <button
            *ngIf="!showCreateForm && !editingTask"
            (click)="openCreateForm()"
            class="px-6 py-2.5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition text-sm"
          >
            + Create Task
          </button>
        </div>

        <!-- Create/Edit Form -->
        <div *ngIf="showCreateForm || editingTask" class="border-b border-gray-200 p-6 bg-gray-50">
          <h3 class="text-lg font-bold text-gray-900 mb-4">
            {{ editingTask ? 'Edit Task' : 'Create New Task' }}
          </h3>
          
          <form (ngSubmit)="editingTask ? updateTask() : addTask()" class="space-y-4">
            <div>
              <input
                *ngIf="!editingTask"
                [(ngModel)]="newTask.title"
                name="title"
                type="text"
                placeholder="Task title *"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <input
                *ngIf="editingTask"
                [(ngModel)]="editingTask.title"
                name="editTitle"
                type="text"
                placeholder="Task title *"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            
            <div>
              <textarea
                *ngIf="!editingTask"
                [(ngModel)]="newTask.description"
                name="description"
                placeholder="Add description..."
                rows="3"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
              ></textarea>
              <textarea
                *ngIf="editingTask"
                [(ngModel)]="editingTask.description"
                name="editDescription"
                placeholder="Add description..."
                rows="3"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
              ></textarea>
            </div>

            <!-- Status dropdown only for EDIT -->
            <div *ngIf="editingTask" class="relative">
              <select
                [(ngModel)]="editingTask.status"
                name="status"
                class="appearance-none px-4 py-2 pr-10 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 cursor-pointer w-full"
              >
                <option value="Todo">📝 Todo</option>
                <option value="Doing">⚡ Doing</option>
                <option value="Done">✅ Done</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>

            <div *ngIf="error" class="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {{ error }}
            </div>

            <div class="flex items-center gap-3">
              <button
                type="button"
                (click)="cancelEdit()"
                class="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-300 transition text-sm"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                class="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition text-sm"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <!-- Task Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Task</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Description</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Created</th>
                <th class="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr *ngFor="let task of tasks" class="hover:bg-gray-50 transition">
                <td class="px-6 py-4">
                  <h3 class="text-sm font-semibold text-gray-900">{{ task.title }}</h3>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-500">{{ task.description || '-' }}</p>
                </td>
                <td class="px-6 py-4">
                  <div class="relative inline-block">
                    <select
                      [value]="task.status"
                      (change)="updateTaskStatus(task, $event)"
                      class="appearance-none px-3 py-1.5 pr-8 rounded-full text-xs font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200"
                      [ngClass]="{
                        'bg-blue-100 text-blue-700 border border-blue-200': task.status === 'Todo',
                        'bg-yellow-100 text-yellow-700 border border-yellow-200': task.status === 'Doing',
                        'bg-green-100 text-green-700 border border-green-200': task.status === 'Done'
                      }"
                    >
                      <option value="Todo">📝 Todo</option>
                      <option value="Doing">⚡ Doing</option>
                      <option value="Done">✅ Done</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                      </svg>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  {{ formatDate(task.createdDate) }}
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button
                      (click)="editTask(task)"
                      class="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition text-xs font-medium border border-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      (click)="deleteTask(task.id)"
                      class="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition text-xs font-medium border border-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Empty State -->
          <div *ngIf="tasks.length === 0 && !loading" class="text-center py-16">
            <div class="text-6xl mb-4">📭</div>
            <p class="text-xl text-gray-700 font-semibold mb-2">No tasks yet</p>
            <p class="text-gray-500">Create one to get started!</p>
          </div>

          <!-- Loading -->
          <div *ngIf="loading" class="text-center py-16">
            <p class="text-gray-500">Loading tasks...</p>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask = { title: "", description: "", status: "Todo" };
  loading = false;
  error = "";
  showCreateForm = false;
  editingTask: any = null;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.error = "";
    this.taskService.getAllTasks().subscribe({
      next: (response: any) => {
        this.tasks = response || [];
        this.loading = false;
      },
      error: (err: any) => {
        this.error = "Failed to load tasks";
        this.loading = false;
      },
    });
  }

  openCreateForm(): void {
    this.showCreateForm = true;
    this.editingTask = null;
    this.error = "";
  }

  cancelEdit(): void {
    this.showCreateForm = false;
    this.editingTask = null;
    this.newTask = { title: "", description: "", status: "Todo" };
    this.error = "";
  }

  editTask(task: any): void {
    this.editingTask = { ...task };
    this.showCreateForm = false;
    this.error = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addTask(): void {
    if (!this.newTask.title.trim()) {
      this.error = "Title không được rỗng";
      return;
    }

    this.taskService.createTask(this.newTask).subscribe({
      next: (createdTask: any) => {
        this.tasks.unshift(createdTask);
        this.newTask = { title: "", description: "", status: "Todo" };
        this.showCreateForm = false;
        this.error = "";
      },
      error: (err: any) => {
        this.error = "Failed to create task";
      },
    });
  }

  updateTask(): void {
    if (!this.editingTask.title.trim()) {
      this.error = "Title không được rỗng";
      return;
    }

    this.taskService.updateTask(this.editingTask.id, this.editingTask).subscribe({
      next: (updated: any) => {
        const index = this.tasks.findIndex((t) => t.id === this.editingTask.id);
        if (index > -1) {
          this.tasks[index] = updated;
        }
        this.editingTask = null;
        this.error = "";
      },
      error: (err: any) => {
        this.error = "Failed to update task";
      },
    });
  }

  updateTaskStatus(task: any, event: any): void {
    const newStatus = event.target.value;
    const updatedTask = { ...task, status: newStatus };
    
    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: (updated: any) => {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index > -1) {
          this.tasks[index] = updated;
        }
      },
      error: (err: any) => {
        this.error = "Failed to update task status";
      },
    });
  }

  deleteTask(id: string): void {
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    }

    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((t) => t.id !== id);
      },
      error: (err: any) => {
        this.error = "Failed to delete task";
      },
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/auth/login"]);
      },
      error: () => {
        this.router.navigate(["/auth/login"]);
      },
    });
  }
}
