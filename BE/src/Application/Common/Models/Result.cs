// ================================================
// Application Layer - Result Pattern
// ================================================
// PURPOSE:
// Encapsulates operation outcomes (success/failure).
// Replaces exceptions for expected failure cases.
// Provides consistent error handling across handlers.
// ================================================

namespace Application.Common.Models;

/// <summary>
/// Represents the result of an operation.
/// </summary>
/// <typeparam name="T">The type of value on success</typeparam>
public class Result<T>
{
    // Implementation: IsSuccess, IsFailure, Value, Errors properties
    // Factory methods: Success(value), Failure(errors)
}

/// <summary>
/// Non-generic result for operations without return value.
/// </summary>
public class Result
{
    // Implementation: IsSuccess, IsFailure, Errors properties
}
