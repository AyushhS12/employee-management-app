namespace Authentication.Infrastructure.DatabaseContext;

public class AppDbContext(DbContextOptions opt): DbContext(opt)
{
    internal DbSet<Employee> Employees { get; set; }
    internal DbSet<Department> Departments { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfiguration(new EmployeeConfig());
        builder.ApplyConfiguration(new DepartmentConfig());
    }
}
