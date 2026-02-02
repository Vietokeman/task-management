# Task Management System

## Clean Architecture Monorepo

A full-stack application template demonstrating **Clean Architecture** principles for both backend (.NET 8) and frontend (Angular 18).

---

## 📁 Repository Structure

```
TASK_MANAGEMENT_SYSTEM_STEMHOUSE/
├── .gitignore                    # Combined .NET + Angular ignore rules
├── README.md                     # This file
│
├── BE/                           # Backend - .NET Clean Architecture
│   ├── TaskManagement.sln        # Visual Studio solution
│   ├── docker-compose.yml        # Development environment
│   ├── Dockerfile                # Container build
│   ├── README.md                 # Backend documentation
│   └── src/
│       ├── Domain/               # Core business logic
│       ├── Application/          # Use cases, CQRS
│       ├── Infrastructure/       # Database, external services
│       └── API/                  # REST API endpoints
│
└── FE/                           # Frontend - Angular Clean Architecture
    ├── angular.json              # Angular CLI config
    ├── package.json              # Dependencies
    ├── README.md                 # Frontend documentation
    └── src/
        └── app/
            ├── core/             # Singleton services
            ├── shared/           # Reusable components
            └── features/         # Feature modules
```

---

## 🏗️ Architecture Overview

### Backend (.NET 8)

```
┌─────────────────────────────────────────────────────────────┐
│                         API Layer                           │
│              (Controllers, Middleware, Endpoints)           │
├─────────────────────────────────────────────────────────────┤
│                    Application Layer                        │
│           (Commands, Queries, Handlers, DTOs)               │
├─────────────────────────────────────────────────────────────┤
│                   Infrastructure Layer                      │
│         (DbContext, Repositories, External Services)        │
├─────────────────────────────────────────────────────────────┤
│                      Domain Layer                           │
│        (Entities, Value Objects, Events, Interfaces)        │
└─────────────────────────────────────────────────────────────┘
```

**Dependency Rule**: Dependencies point inward. Domain has no dependencies.

### Frontend (Angular 18)

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│                  (Components, Pages, UI)                    │
├─────────────────────────────────────────────────────────────┤
│                    Application Layer                        │
│              (Facades, State, Use Cases)                    │
├─────────────────────────────────────────────────────────────┤
│                   Infrastructure Layer                      │
│                   (API Services, HTTP)                      │
├─────────────────────────────────────────────────────────────┤
│                      Domain Layer                           │
│                (Entities, Value Objects)                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Backend | Frontend |
|-------|---------|----------|
| **Framework** | .NET 8 / ASP.NET Core | Angular 18 |
| **Language** | C# 12 | TypeScript 5.4 |
| **Database** | PostgreSQL + EF Core 8 | - |
| **State** | - | Signals / RxJS |
| **Pattern** | CQRS + MediatR | Facades + Stores |
| **Validation** | FluentValidation | Reactive Forms |

---

## 🚀 Quick Start

### Prerequisites
- .NET 8 SDK
- Node.js 20+ & npm
- Docker (optional, for database)

### Backend
```bash
cd BE
dotnet restore
docker-compose up -d postgres
dotnet run --project src/API
# API: http://localhost:5000/swagger
```

### Frontend
```bash
cd FE
npm install
npm start
# App: http://localhost:4200
```

---

## 📋 Key Principles

### Clean Architecture Rules
1. **Independence**: Business logic independent of frameworks, UI, database
2. **Testability**: Business rules can be tested without external elements
3. **Dependency Inversion**: High-level modules don't depend on low-level modules

### CQRS Pattern (Backend)
- **Commands**: Write operations that modify state
- **Queries**: Read operations that return data
- **Handlers**: Execute commands/queries via MediatR

### Feature-Based Structure (Frontend)
- Each feature is self-contained with its own layers
- Lazy-loaded for performance
- Clear boundaries between features

---

## 📄 License

This is an architectural template for educational and reference purposes.