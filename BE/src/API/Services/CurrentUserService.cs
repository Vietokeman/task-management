// ================================================
// API Layer - Current User Service
// ================================================
// PURPOSE:
// Implementation of ICurrentUserService.
// Extracts current user from HttpContext.
// Reads claims from JWT token.
// ================================================

namespace API.Services;

/// <summary>
/// Current user service that reads from HttpContext.
/// </summary>
public class CurrentUserService
{
    // Implementation:
    // - Inject IHttpContextAccessor
    // - Extract UserId, Email, Roles from claims
    // - Implement ICurrentUserService interface
}
