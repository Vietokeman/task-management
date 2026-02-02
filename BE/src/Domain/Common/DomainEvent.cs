// ================================================
// Domain Layer - Domain Event Base
// ================================================
// PURPOSE:
// Abstract base class for all domain events.
// Enables event-driven communication between aggregates.
// Supports eventual consistency and decoupling.
// ================================================

namespace Domain.Common;

/// <summary>
/// Abstract base class for domain events.
/// </summary>
public abstract class DomainEvent
{
    // Implementation: Add event metadata (OccurredOn, EventId)
}
