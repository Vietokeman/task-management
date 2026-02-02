// ================================================
// Application Layer - Performance Behavior
// ================================================
// PURPOSE:
// MediatR pipeline behavior for performance monitoring.
// Logs warning if request takes longer than threshold.
// Helps identify slow operations.
// ================================================

namespace Application.Common.Behaviors;

/// <summary>
/// Pipeline behavior that monitors request performance.
/// </summary>
public class PerformanceBehavior<TRequest, TResponse>
{
    // Implementation: Measure execution time, log if exceeds threshold
}
