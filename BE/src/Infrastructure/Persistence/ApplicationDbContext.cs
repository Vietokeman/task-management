// ================================================
// Infrastructure Layer - Application DbContext
// ================================================
// PURPOSE:
// Entity Framework Core DbContext implementation.
// Defines DbSets for all entities.
// Configures entity mappings via IEntityTypeConfiguration.
// ================================================

namespace Infrastructure.Persistence;

/// <summary>
/// Entity Framework Core database context.
/// </summary>
public class ApplicationDbContext
{
    // Implementation: 
    // - Inherit from DbContext
    // - Define DbSet<Entity> properties
    // - Override OnModelCreating for configurations
    // - Implement IUnitOfWork
}
