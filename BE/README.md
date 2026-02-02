# Task Management System - Backend

## Clean Architecture .NET 8 Backend

This project follows **Clean Architecture** with **DDD** and **CQRS** patterns.

---

## 📁 Project Structure

```
BE/
├── TaskManagement.sln          # Solution file
├── docker-compose.yml          # Docker development environment
├── Dockerfile                  # Container build configuration
└── src/
    ├── Domain/                 # Core business logic (NO dependencies)
    │   ├── Common/             # Base classes, interfaces
    │   ├── Entities/           # Aggregate roots, entities
    │   ├── ValueObjects/       # Immutable value objects
    │   ├── Events/             # Domain events
    │   ├── Enums/              # Domain enumerations
    │   ├── Exceptions/         # Domain exceptions
    │   └── Repositories/       # Repository interfaces
    │
    ├── Application/            # Business rules, use cases
    │   ├── Common/             # Shared application concerns
    │   │   ├── Behaviors/      # MediatR pipeline behaviors
    │   │   ├── Interfaces/     # Service abstractions
    │   │   ├── Models/         # DTOs, Result pattern
    │   │   ├── Constants/      # Application constants
    │   │   └── Mappings/       # AutoMapper profiles
    │   └── Features/           # CQRS Commands & Queries
    │
    ├── Infrastructure/         # External dependencies
    │   ├── Persistence/        # EF Core, DbContext, Repositories
    │   ├── Identity/           # Authentication, Authorization
    │   ├── Services/           # External service implementations
    │   ├── Settings/           # Configuration classes
    │   └── Templates/          # Email templates, etc.
    │
    └── API/                    # Presentation layer
        ├── Controllers/        # REST API endpoints
        ├── Middleware/         # Exception handling, logging
        ├── Services/           # API-specific services
        └── Properties/         # Launch settings
```

---

## 🏗️ Architecture Layers

| Layer | Responsibility | Dependencies |
|-------|---------------|--------------|
| **Domain** | Core business logic, entities | None |
| **Application** | Use cases, CQRS handlers | Domain |
| **Infrastructure** | Database, external services | Domain, Application |
| **API** | HTTP endpoints, middleware | Application, Infrastructure |

---

## 🛠️ Technology Stack

- **.NET 8** - Web framework
- **Entity Framework Core 8** - ORM
- **PostgreSQL** - Database
- **MediatR** - CQRS pattern
- **FluentValidation** - Input validation
- **AutoMapper** - Object mapping
- **Serilog** - Structured logging
- **JWT** - Authentication

---

## 🚀 Getting Started

```bash
# Navigate to BE folder
cd BE

# Restore dependencies
dotnet restore

# Run with Docker (database)
docker-compose up -d postgres

# Run API
dotnet run --project src/API

# Access Swagger
# http://localhost:5000/swagger
```

---

## 📋 Development Guidelines

1. **Domain Layer**: No external dependencies, pure business logic
2. **CQRS**: Commands for writes, Queries for reads
3. **Result Pattern**: Use Result<T> instead of exceptions
4. **Repository Pattern**: One repository per aggregate root
5. **Thin Controllers**: Only dispatch to MediatR handlers
