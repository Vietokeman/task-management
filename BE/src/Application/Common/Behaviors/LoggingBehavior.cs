// ================================================
// Application Layer - Logging Behavior
// ================================================
// PURPOSE:
// MediatR pipeline behavior for logging requests.
// Logs entry/exit of all commands and queries.
// Useful for debugging and audit trails.
// ================================================

namespace Application.Common.Behaviors;

/// <summary>
/// Pipeline behavior that logs all MediatR requests.
/// </summary>
public class LoggingBehavior<TRequest, TResponse>
{
    // Implementation: Log request start, end, and duration
}
