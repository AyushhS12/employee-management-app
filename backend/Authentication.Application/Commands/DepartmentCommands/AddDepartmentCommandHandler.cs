namespace Authentication.Application.Commands.DepartmentCommands;

public class AddDepartmentCommandHandler(IMapper mapper, IDepartmentRepository deptRepo) : IRequestHandler<AddDepartmentCommand, int?>
{
    public async Task<int?> Handle(AddDepartmentCommand cmd, CancellationToken token)
    {
        return await deptRepo.AddAsync(cmd.Name);
    }
}
