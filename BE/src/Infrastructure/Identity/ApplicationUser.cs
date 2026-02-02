// ================================================
// Infrastructure Layer - Identity User
// ================================================
// PURPOSE:
// Custom ASP.NET Core Identity user entity.
// Extends IdentityUser with domain-specific properties.
// Used for authentication and authorization.
// ================================================

namespace Infrastructure.Identity;

/// <summary>
/// Application-specific Identity user.
/// </summary>
public class ApplicationUser
{
    // Implementation: Extend IdentityUser<Guid>
    // Add custom properties: FirstName, LastName, RefreshTokens, etc.
}
