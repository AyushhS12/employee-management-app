namespace Authentication.Application.Commands.DepartmentCommands;

public class DeleteDepartmentCommandHandler(IDepartmentRepository deptRepo): IRequestHandler<DeleteDepartmentCommand, bool>
{
    public async Task<bool> Handle(DeleteDepartmentCommand command, CancellationToken token)
    {
        return await deptRepo.DeleteIdAsync(command.Id);
    }
}
