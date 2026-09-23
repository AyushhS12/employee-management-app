
using Authentication.Application.Commands.EmployeeCommands;

namespace Authentication.Application;

public static class Extensions
{
    public static void AddCommandsAndQueries(this IServiceCollection services)
    {
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Extensions).Assembly));
        services.AddValidators();
        services.AddRepos();
    }


    static void AddValidators(this IServiceCollection services)
    {
        services.AddValidatorsFromAssemblyContaining<AddEmployeeCommand>();
    }
}
