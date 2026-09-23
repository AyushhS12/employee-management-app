namespace Authentication.Application.Queries.EmployeeQueries;
public class LoginEmployeeQuery: IRequest<string?>
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
