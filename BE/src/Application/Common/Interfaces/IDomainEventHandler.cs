// ================================================
// Application Layer - Domain Event Handler Interface
// ================================================
// PURPOSE:
// Interface for handling domain events.
// Decouples event producers from consumers.
// Enables side effects like notifications, integrations.
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Interface for domain event handlers.
/// </summary>
/// <typeparam name="TEvent">The domain event type</typeparam>
public interface IDomainEventHandler<TEvent>
{
    // Implementation: Handle method for processing domain events
}
