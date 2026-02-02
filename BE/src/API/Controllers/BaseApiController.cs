// ================================================
// API Layer - Base API Controller
// ================================================
// PURPOSE:
// Abstract base class for all API controllers.
// Provides common functionality and MediatR sender.
// Defines standard response handling patterns.
// ================================================

using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

/// <summary>
/// Base controller with common functionality.
/// </summary>
[ApiController]
[Route("api/[controller]")]
public abstract class BaseApiController : ControllerBase
{
    // Implementation:
    // - Inject ISender (MediatR) via property injection
    // - Helper methods for mapping Result<T> to ActionResult
    // - Common response formatting
}
