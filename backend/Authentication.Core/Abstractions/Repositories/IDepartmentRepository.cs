using Authentication.Core.Entities;

namespace Authentication.Core.Abstractions.Repositories;

public interface IDepartmentRepository
{
    Task<int?> AddAsync(string name);
    Task<Department?> GetByIdAsync(int id);
    Task<bool> DeleteIdAsync(int id);
    Task<IList<Department>> GetAllAsync();
    Task<IList<Employee>> GetAllEmployeesOfDepartmentAsync(int id);
    Task<IList<Employee>> GetAllEmployeesOfDepartmentAsync(string name);
    Task<bool> DeleteByNameAsync(string name);
}
