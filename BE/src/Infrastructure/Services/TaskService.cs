using Domain.Entities;
using Infrastructure.Persistence;
using TaskEntity = Domain.Entities.Task;

namespace Infrastructure.Services;

public class TaskService
{
    private readonly ApplicationDbContext _context;

    public TaskService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async System.Threading.Tasks.Task<List<TaskEntity>> GetAllTasksAsync()
    {
        return await System.Threading.Tasks.Task.FromResult(_context.Tasks.ToList());
    }

    public async System.Threading.Tasks.Task<TaskEntity?> GetTaskByIdAsync(Guid id)
    {
        return await System.Threading.Tasks.Task.FromResult(_context.Tasks.FirstOrDefault(t => t.Id == id));
    }

    public async System.Threading.Tasks.Task<TaskEntity> CreateTaskAsync(string title, string? description, string status)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Title is required");

        var task = new TaskEntity
        {
            Id = Guid.NewGuid(),
            Title = title,
            Description = description,
            Status = status,
            CreatedDate = DateTime.UtcNow
        };

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return task;
    }

    public async System.Threading.Tasks.Task<TaskEntity?> UpdateTaskAsync(Guid id, string? title, string? description, string? status)
    {
        var task = _context.Tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return null;

        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Title is required");

        task.Title = title ?? task.Title;
        task.Description = description ?? task.Description;
        task.Status = status ?? task.Status;

        _context.Tasks.Update(task);
        await _context.SaveChangesAsync();
        return task;
    }

    public async System.Threading.Tasks.Task<bool> DeleteTaskAsync(Guid id)
    {
        var task = _context.Tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return false;

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return true;
    }
}
