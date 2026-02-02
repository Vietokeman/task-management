// ================================================
// Application Layer - Command Interface
// ================================================
// PURPOSE:
// Marker interface for CQRS commands (write operations).
// Commands modify state and return Result<T>.
// Naming: [Verb][Entity]Command (e.g., CreateOrderCommand)
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Marker interface for commands (write operations).
/// </summary>
/// <typeparam name="TResponse">The response type wrapped in Result</typeparam>
public interface ICommand<TResponse>
{
    // Marker interface - implemented by MediatR IRequest
}
