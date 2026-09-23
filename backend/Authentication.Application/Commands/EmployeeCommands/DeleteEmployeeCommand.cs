namespace Authentication.Application.Commands.EmployeeCommands;

public class DeleteEmployeeCommand: IRequest<bool>
{
    public int? Id { get; set; }

    public string? UserName { get; set; }

    public string? Email { get; set; }
}
