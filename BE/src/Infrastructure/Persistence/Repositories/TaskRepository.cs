using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence.Repositories;

public class TaskRepository : ITaskRepository
{
    private readonly ApplicationDbContext _context;

    public TaskRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Domain.Entities.Task>> GetAllAsync()
    {
        return await _context.Tasks
            .OrderByDescending(t => t.CreatedDate)
            .ToListAsync();
    }

    public async Task<Domain.Entities.Task?> GetByIdAsync(Guid id)
    {
        return await _context.Tasks
            .FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<Domain.Entities.Task> AddAsync(Domain.Entities.Task entity)
    {
        await _context.Tasks.AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public void Update(Domain.Entities.Task entity)
    {
        _context.Tasks.Update(entity);
        _context.SaveChanges();
    }

    public void Delete(Domain.Entities.Task entity)
    {
        _context.Tasks.Remove(entity);
        _context.SaveChanges();
    }
}
