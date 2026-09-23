namespace Authentication.Application.Commands.DepartmentCommands;
public class AddDepartmentCommand: IRequest<int?>
{
    public string Name { get; set; } = string.Empty;
}
