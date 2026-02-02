// ================================================
// Application Layer - Query Interface
// ================================================
// PURPOSE:
// Marker interface for CQRS queries (read operations).
// Queries are read-only and do not modify state.
// Naming: Get[Entity]Query, Get[Entities]Query
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Marker interface for queries (read operations).
/// </summary>
/// <typeparam name="TResponse">The response type</typeparam>
public interface IQuery<TResponse>
{
    // Marker interface - implemented by MediatR IRequest
}
