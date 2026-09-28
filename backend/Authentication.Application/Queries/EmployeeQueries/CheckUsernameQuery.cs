namespace Authentication.Application.Queries.EmployeeQueries;

public class CheckUsernameQuery : IRequest<Employee?>
{
    public string Username { get; set; } = string.Empty;
}
