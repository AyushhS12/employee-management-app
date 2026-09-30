namespace Authentication.Infrastructure.Repositories;

internal class EmployeeRepository(IMapper mapper, AppDbContext db) : IEmployeeRepository
{
    public async Task<(int?, string?)> AddAsync(AddEmployeeDTO dto)
    {
        var dept = await db.Departments.Where(d => d.Name == dto.Department).SingleOrDefaultAsync();
        if (dept is null) return (null, "Department does not exist");
        var emp = mapper.Map<Employee>(dto);
        emp.DepartmentId = dept.Id;
        emp.Department = null!;
        await db.AddAsync(emp);
        var r = await db.SaveChangesAsync();
        return (emp.Id, null);
    }

    public async Task<bool> UpdateAsync(UpdateEmployeeDTO dto)
    {
        //switch (dto.Property)
        //{
        //    case "name":
        //        await db.Employees.Where(e => e.Id == dto.Id).ExecuteUpdateAsync(setter => setter.SetProperty(u => u.Name, dto.Value));
        //        flag = true;
        //        break;
        //    case "email":
        //        await db.Employees.Where(e => e.Id == dto.Id).ExecuteUpdateAsync(setter => setter.SetProperty(u => u.Email, dto.Value));
        //        flag = true;
        //        break;
        //    case "username":
        //        await db.Employees.Where(e => e.Id == dto.Id).ExecuteUpdateAsync(setter => setter.SetProperty(u => u.Username, dto.Value));
        //        flag = true;
        //        break;
        //    default:
        //        break;
        //}
        var department = await db.Departments.FirstOrDefaultAsync(d => d.Name == dto.Department);
        var employee = await db.Employees.Where(e => e.Id == dto.Id).Include(e => e.Department).FirstOrDefaultAsync();
        if (employee is not null)
        {
            var e = mapper.Map<Employee>(dto);
            employee.Department = department ?? throw new InvalidDataException("Department does not exist");
            employee.Name = e.Name;
            employee.Username = e.Username;
            employee.Email = e.Email;
            employee.Role = e.Role;
            db.Employees.Update(employee);
        }
        return (await db.SaveChangesAsync() == 1) ? true : false;
    }
    public async Task<bool> DeleteByIdAsync(int id)
    {
        if (await db.Employees.Where(e => e.Id == id).ExecuteDeleteAsync() == 1) return true;
        return false;
    }

    public async Task<bool> DeleteByUsernameAsync(string username)
    {
        if (await db.Employees.Where(e => e.Username == username).ExecuteDeleteAsync() == 1)
        {
            return true;
        }
        return false;
    }

    public async Task<bool> DeleteByEmailAsync(string email)
    {
        if (await db.Employees.Where(e => e.Email == email).ExecuteDeleteAsync() == 1)
        {
            return true;
        }
        return false;
    }

    public async Task<IList<Employee>> GetAllAsync()
    {
        return await db.Employees.Include(e => e.Department).AsNoTracking().ToListAsync();
    }

    public async Task<Employee?> GetByIdAsync(int id)
    {
        return await db.Employees.Include(e => e.Department).Where(e => e.Id == id).SingleOrDefaultAsync();
    }
    public async Task<Employee?> GetByUsernameAsync(string username)
    {
        return await db.Employees.Where(e => e.Username.Equals(username)).SingleOrDefaultAsync();
    }


    public async Task<(IList<Employee> Employees, int Count)> GetByPageIndexAndSize(int pageIndex, int pageSize, string order)
    {
        var skip = (pageIndex - 1) * pageSize;
        if (skip < 0)
        {
            throw new InvalidDataException("Index cannot be 0 or less than zero");
        }
        var list = db.Employees.Skip(skip).Take(pageSize).OrderBy(e => e.Name).AsNoTracking();
        var count = db.Employees.Count();
        switch (order)
        {
            case "asc":
                return (await list.ToListAsync(), Count: count);
            case "desc":
                return (await list.OrderByDescending(e => e.Name).ToListAsync(), count);
            default:
                throw new InvalidDataException("Invalid ordering value");
        }
    }

    public async Task<IList<Employee>> FuzzySearch(string query)
    {
        return await db.Employees.Include(e => e.Department).Where(
            e =>
                e.Email.ToLower().Contains(query.ToLower()) ||
                e.Username.ToLower().Contains(query.ToLower()) ||
                e.Name.ToLower().Contains(query.ToLower())
            ).Select(e => new
            {
                Employee = e,
                Score =
                e.Username.ToLower().Equals(query.ToLower()) ? 100 :
                e.Email.ToLower().Equals(query.ToLower()) ? 90 :
                e.Username.ToLower().StartsWith(query.ToLower()) ? 80 :
                e.Email.ToLower().StartsWith(query.ToLower()) ? 70 :
                e.Username.ToLower().Contains(query.ToLower()) ? 60 :
                e.Email.ToLower().Contains(query.ToLower()) ? 50 : 0
            })
            .OrderByDescending(x => x.Score)
            .Select(x => x.Employee).AsNoTracking().ToListAsync();
    }
}
