namespace Authentication.Application.Queries.EmployeeQueries;

public class CheckUsernameQueryHandler(IEmployeeRepository empRepo) : IRequestHandler<CheckUsernameQuery, Employee?>
{
    public async Task<Employee?> Handle(CheckUsernameQuery query, CancellationToken token)
    {
        return (await empRepo.GetByUsernameAsync(query.Username));
    }
}
