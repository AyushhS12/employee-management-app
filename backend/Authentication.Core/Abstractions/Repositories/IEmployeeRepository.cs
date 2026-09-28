namespace Authentication.Core.Abstractions.Repositories;

public interface IEmployeeRepository
{
    Task<(int?, string?)> AddAsync(AddEmployeeDTO user);
    Task<IList<Employee>> GetAllAsync();
    Task<Employee?> GetByIdAsync(int id);
    Task<Employee?> GetByUsernameAsync(string username);
    Task<bool> DeleteByIdAsync(int id);
    Task<bool> DeleteByUsernameAsync(string username);
    Task<bool> DeleteByEmailAsync(string email);
    Task<bool> UpdateAsync(UpdateEmployeeDTO dto);
    Task<(IList<Employee> Employees, int Count)> GetByPageIndexAndSize(int pageIndex, int pageSize, string order);
    Task<IList<Employee>> FuzzySearch(string query);
}
