// ================================================
// Application Layer - Query Handler Interface
// ================================================
// PURPOSE:
// Interface for CQRS query handlers.
// Handles read-only data retrieval operations.
// Can use optimized read models or direct queries.
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Interface for query handlers.
/// </summary>
/// <typeparam name="TQuery">The query type</typeparam>
/// <typeparam name="TResponse">The response type</typeparam>
public interface IQueryHandler<TQuery, TResponse>
{
    // Implementation: Handle method that retrieves data
}
