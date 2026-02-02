# Task Management System - Frontend

## Angular 18 Clean Architecture Frontend

This project follows **Clean Architecture** principles adapted for Angular.

---

## 📁 Project Structure

```
FE/
├── angular.json              # Angular CLI configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── src/
    ├── index.html            # HTML entry point
    ├── main.ts               # Application bootstrap
    ├── styles.scss           # Global styles
    ├── environments/         # Environment configurations
    │   ├── environment.ts
    │   └── environment.prod.ts
    └── app/
        ├── app.component.ts  # Root component
        ├── app.config.ts     # Application configuration
        ├── app.routes.ts     # Root routing
        │
        ├── core/             # Cross-cutting concerns (singleton)
        │   ├── services/     # Global services (auth, API, storage)
        │   ├── guards/       # Route guards
        │   ├── interceptors/ # HTTP interceptors
        │   ├── models/       # Core interfaces/types
        │   └── constants/    # Application constants
        │
        ├── shared/           # Reusable, stateless (multi-instance)
        │   ├── components/   # UI components (button, modal, input)
        │   ├── directives/   # Custom directives
        │   ├── pipes/        # Custom pipes
        │   └── utils/        # Utility functions
        │
        └── features/         # Feature modules (lazy-loaded)
            └── [feature]/
                ├── domain/         # Entities, value objects
                ├── application/    # Use cases, state, facades
                ├── infrastructure/ # API services
                ├── presentation/   # Components, pages
                └── [feature].routes.ts
```

---

## 🏗️ Architecture Layers

### Core Layer

| Folder            | Responsibility                                 |
| ----------------- | ---------------------------------------------- |
| **services/**     | Singleton services (auth, API client, storage) |
| **guards/**       | Route protection (auth, roles)                 |
| **interceptors/** | HTTP request/response processing               |
| **models/**       | Core interfaces shared across app              |
| **constants/**    | Application-wide constants                     |

### Shared Layer

| Folder          | Responsibility            |
| --------------- | ------------------------- |
| **components/** | Reusable UI components    |
| **directives/** | Custom Angular directives |
| **pipes/**      | Custom Angular pipes      |
| **utils/**      | Pure utility functions    |

### Features Layer (per feature)

| Folder              | Responsibility                       |
| ------------------- | ------------------------------------ |
| **domain/**         | Business entities, value objects     |
| **application/**    | Use cases, state management, facades |
| **infrastructure/** | API services, external integrations  |
| **presentation/**   | Pages, components, UI logic          |

---

## 🛠️ Technology Stack

- **Angular 18** - Framework (standalone components)
- **TypeScript 5.4** - Language
- **RxJS 7** - Reactive programming
- **SCSS** - Styling
- **Angular Router** - Navigation
- **Angular Forms** - Form handling

---

## 🚀 Getting Started

```bash
# Navigate to FE folder
cd FE

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build:prod

# Run tests
npm test

# Access application
# http://localhost:4200
```

---

## 📋 Development Guidelines

1. **Standalone Components**: Use standalone components (Angular 15+)
2. **Lazy Loading**: Lazy-load feature modules for performance
3. **Smart/Dumb Components**: Container (smart) and presentational (dumb)
4. **Signals**: Use Angular Signals for reactive state (Angular 16+)
5. **Functional Guards/Interceptors**: Use functional patterns (Angular 15+)
6. **Path Aliases**: Use @core, @shared, @features aliases
