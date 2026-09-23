namespace Authentication.Infrastructure;

public static class Extensions
{
    public static void AddRepos(this IServiceCollection services)
    {
        services.AddScoped<IEmployeeRepository, EmployeeRepository>();
        services.AddScoped<IDepartmentRepository, DepartmentRepository>();
    }
}
