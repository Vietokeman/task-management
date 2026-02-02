// ================================================
// Domain Layer - Aggregate Root Marker Interface
// ================================================
// PURPOSE:
// Marker interface for aggregate root entities.
// Only aggregate roots should have repositories.
// Ensures DDD aggregate boundary enforcement.
// ================================================

namespace Domain.Common;

/// <summary>
/// Marker interface for aggregate root entities.
/// </summary>
public interface IAggregateRoot
{
    // Marker interface - no members required
}
