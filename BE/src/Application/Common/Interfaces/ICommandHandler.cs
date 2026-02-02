// ================================================
// Application Layer - Command Handler Interface
// ================================================
// PURPOSE:
// Interface for CQRS command handlers.
// Handles business logic for write operations.
// Returns Result<T> for consistent error handling.
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Interface for command handlers.
/// </summary>
/// <typeparam name="TCommand">The command type</typeparam>
/// <typeparam name="TResponse">The response type</typeparam>
public interface ICommandHandler<TCommand, TResponse>
{
    // Implementation: Handle method that processes the command
}
