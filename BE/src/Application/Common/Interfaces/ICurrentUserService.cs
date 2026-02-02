// ================================================
// Application Layer - Current User Service Interface
// ================================================
// PURPOSE:
// Abstraction for accessing current authenticated user.
// Implementation in API layer extracts from HttpContext.
// Enables testing without HTTP dependencies.
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Interface for accessing current user information.
/// </summary>
public interface ICurrentUserService
{
    // Implementation: UserId, UserName, Email, Roles properties
}
