namespace Authentication.Application.Commands.EmployeeCommands;

public class AddEmployeeCommand : IRequest<(int?, string?[])>
{
    public string Name { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
}
