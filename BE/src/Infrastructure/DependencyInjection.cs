// ================================================
// Infrastructure Layer - Dependency Injection
// ================================================
// PURPOSE:
// Extension method to register all Infrastructure services.
// Registers DbContext, Repositories, External Services.
// Called from Program.cs during startup.
// ================================================

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure;

/// <summary>
/// Dependency injection configuration for Infrastructure layer.
/// </summary>
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        // Register DbContext with connection string
        // Register repository implementations
        // Register external service implementations
        // Register Identity services
        
        return services;
    }
}
