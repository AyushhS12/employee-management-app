namespace Authentication.Application.Commands.EmployeeCommands;

public class UpdateEmployeeCommand : IRequest<bool>
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Department { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
}
//public class UpdateEmployeeCommand : IRequest<bool>
//{
//    public int Id { get; set; }
//    public string Property { get; set; } = string.Empty;
//    public string Value { get; set; } = string.Empty;
//}
