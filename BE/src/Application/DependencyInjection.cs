// ================================================
// Application Layer - Dependency Injection
// ================================================
// PURPOSE:
// Extension method to register all Application layer services.
// Registers MediatR, FluentValidation, AutoMapper, Behaviors.
// Called from Program.cs during startup.
// ================================================

using Microsoft.Extensions.DependencyInjection;

namespace Application;

/// <summary>
/// Dependency injection configuration for Application layer.
/// </summary>
public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Register MediatR handlers from this assembly
        // Register FluentValidation validators
        // Register AutoMapper profiles
        // Register pipeline behaviors
        
        return services;
    }
}
