// ================================================
// Domain Layer - Unit of Work Interface
// ================================================
// PURPOSE:
// Defines transaction boundary for repository operations.
// Ensures atomic commits across multiple repositories.
// Implementation in Infrastructure layer with DbContext.
// ================================================

namespace Domain.Common;

/// <summary>
/// Unit of Work pattern interface for managing transactions.
/// </summary>
public interface IUnitOfWork
{
    // Implementation: Add SaveChangesAsync, BeginTransaction, Commit, Rollback
}
