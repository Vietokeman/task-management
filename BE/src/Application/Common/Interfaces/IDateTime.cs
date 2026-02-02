// ================================================
// Application Layer - DateTime Service Interface
// ================================================
// PURPOSE:
// Abstraction for system time access.
// Enables mocking time in tests.
// Always use this instead of DateTime.Now/UtcNow.
// ================================================

namespace Application.Common.Interfaces;

/// <summary>
/// Interface for accessing current date/time.
/// </summary>
public interface IDateTime
{
    // Implementation: Now, UtcNow properties
}
