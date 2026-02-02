// ================================================
// Infrastructure Layer - Identity Role
// ================================================
// PURPOSE:
// Custom ASP.NET Core Identity role entity.
// Extends IdentityRole with additional properties.
// Used for role-based authorization.
// ================================================

namespace Infrastructure.Identity;

/// <summary>
/// Application-specific Identity role.
/// </summary>
public class ApplicationRole
{
    // Implementation: Extend IdentityRole<Guid>
    // Add custom properties: Description, Permissions, etc.
}
