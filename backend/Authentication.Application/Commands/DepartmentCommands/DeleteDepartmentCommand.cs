namespace Authentication.Application.Commands.DepartmentCommands;

public class DeleteDepartmentCommand : IRequest<bool>
{
    public int Id { get; set; }
}
