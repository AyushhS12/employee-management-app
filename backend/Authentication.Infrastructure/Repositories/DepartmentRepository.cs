namespace Authentication.Infrastructure.Repositories;

internal class DepartmentRepository(AppDbContext db) : IDepartmentRepository
{
    public async Task<int?> AddAsync(string name)
    {
        var department = new Department { Name = name };
        await db.Departments.AddAsync(department);
        await db.SaveChangesAsync();
        return department.Id;
    }

    public async Task<bool> DeleteByNameAsync(string name)
    {
        if (await db.Departments.Where(d => d.Name == name).ExecuteDeleteAsync() == 1) return true;
        else return false;
    }

    public async Task<bool> DeleteIdAsync(int id)
    {
        if (await db.Departments.Where(d => d.Id == id).ExecuteDeleteAsync() == 1) return true;
        else return false;
    }

    public async Task<IList<Department>> GetAllAsync()
    {
        return await db.Departments.Include(d => d.Employees).AsNoTracking().ToListAsync();
    }

    public async Task<IList<Employee>> GetAllEmployeesOfDepartmentAsync(int id)
    {
        return await db.Employees.Where(e => e.DepartmentId == id).AsNoTracking().ToListAsync();
    }

    public async Task<IList<Employee>> GetAllEmployeesOfDepartmentAsync(string name)
    {
        return await db.Employees.Include(e => e.Department).Where(e => e.Department.Name == name).AsNoTracking().ToListAsync();
    }

    public async Task<Department?> GetByIdAsync(int id)
    {
        return await db.Departments.Where(d => d.Id == id).SingleOrDefaultAsync();
    }
}
