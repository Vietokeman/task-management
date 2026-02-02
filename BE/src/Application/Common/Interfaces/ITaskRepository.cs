using Domain.Common;

namespace Application.Common.Interfaces;

public interface ITaskRepository
{
    Task<IEnumerable<Domain.Entities.Task>> GetAllAsync();
    Task<Domain.Entities.Task?> GetByIdAsync(Guid id);
    Task<Domain.Entities.Task> AddAsync(Domain.Entities.Task task);
    void Update(Domain.Entities.Task task);
    void Delete(Domain.Entities.Task task);
}
