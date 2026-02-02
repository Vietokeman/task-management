using Application.Common.Interfaces;
using Application.Features.Tasks;
using TaskEntity = Domain.Entities.Task;

namespace Infrastructure.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _taskRepository;

    public TaskService(ITaskRepository taskRepository)
    {
        _taskRepository = taskRepository;
    }

    public async Task<IEnumerable<TaskDto>> GetAllTasksAsync()
    {
        var tasks = await _taskRepository.GetAllAsync();
        return tasks.Select(MapToDto);
    }

    public async Task<TaskDto?> GetTaskByIdAsync(Guid id)
    {
        var task = await _taskRepository.GetByIdAsync(id);
        return task != null ? MapToDto(task) : null;
    }

    public async Task<TaskDto> CreateTaskAsync(CreateTaskRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Title))
            throw new ArgumentException("Title is required");

        var task = new TaskEntity
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Description = request.Description,
            Status = request.Status ?? "Todo",
            CreatedDate = DateTime.UtcNow
        };

        var created = await _taskRepository.AddAsync(task);
        return MapToDto(created);
    }

    public async Task<TaskDto?> UpdateTaskAsync(Guid id, UpdateTaskRequest request)
    {
        var existing = await _taskRepository.GetByIdAsync(id);
        if (existing == null)
            return null;

        if (!string.IsNullOrWhiteSpace(request.Title))
            existing.Title = request.Title;
        
        if (request.Description != null)
            existing.Description = request.Description;
        
        if (!string.IsNullOrWhiteSpace(request.Status))
            existing.Status = request.Status;

        _taskRepository.Update(existing);
        return MapToDto(existing);
    }

    public async Task<bool> DeleteTaskAsync(Guid id)
    {
        var task = await _taskRepository.GetByIdAsync(id);
        if (task == null)
            return false;

        _taskRepository.Delete(task);
        return true;
    }

    private static TaskDto MapToDto(TaskEntity task)
    {
        return new TaskDto
        {
            Id = task.Id,
            Title = task.Title,
            Description = task.Description,
            Status = task.Status,
            CreatedDate = task.CreatedDate
        };
    }
}
