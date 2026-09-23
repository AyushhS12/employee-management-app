namespace Authentication.Application.Commands.EmployeeCommands;

public class UpdateEmployeeCommandHandler(IMapper mapper, IEmployeeRepository userRepo) : IRequestHandler<UpdateEmployeeCommand, bool>
{
    public async Task<bool> Handle(UpdateEmployeeCommand cmd, CancellationToken token)
    {
        var dto = mapper.Map<UpdateEmployeeDTO>(cmd);
        return await userRepo.UpdateAsync(dto);
    }
}
