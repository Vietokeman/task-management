// ================================================
// Application Layer - Validation Behavior
// ================================================
// PURPOSE:
// MediatR pipeline behavior for automatic validation.
// Runs FluentValidation validators before handlers.
// Returns validation errors without executing handler.
// ================================================

namespace Application.Common.Behaviors;

/// <summary>
/// Pipeline behavior that validates requests using FluentValidation.
/// </summary>
public class ValidationBehavior<TRequest, TResponse>
{
    // Implementation: Collect validators, run validation, throw if invalid
}
