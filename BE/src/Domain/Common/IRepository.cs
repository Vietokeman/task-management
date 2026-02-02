// ================================================
// Domain Layer - Generic Repository Interface
// ================================================
// PURPOSE:
// Generic repository contract for aggregate roots.
// Defines standard CRUD operations.
// Implementations reside in Infrastructure layer.
// ================================================

namespace Domain.Common;

/// <summary>
/// Generic repository interface for aggregate root entities.
/// </summary>
/// <typeparam name="T">Entity type that implements IAggregateRoot</typeparam>
public interface IRepository<T> where T : class, IAggregateRoot
{
    // Implementation: Add GetByIdAsync, AddAsync, Update, Delete methods
}
