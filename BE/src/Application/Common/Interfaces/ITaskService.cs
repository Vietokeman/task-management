using Application.Features.Tasks;

namespace Application.Common.Interfaces;

public interface ITaskService
{
    Task<IEnumerable<TaskDto>> GetAllTasksAsync();
    Task<TaskDto?> GetTaskByIdAsync(Guid id);
    Task<TaskDto> CreateTaskAsync(CreateTaskRequest request);
    Task<TaskDto?> UpdateTaskAsync(Guid id, UpdateTaskRequest request);
    Task<bool> DeleteTaskAsync(Guid id);
}
