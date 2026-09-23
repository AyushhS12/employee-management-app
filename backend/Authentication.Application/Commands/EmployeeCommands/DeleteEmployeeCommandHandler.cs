namespace Authentication.Application.Commands.EmployeeCommands;

public class DeleteEmployeeCommandHandler(IEmployeeRepository userRepo) : IRequestHandler<DeleteEmployeeCommand, bool>
{
    public async Task<bool> Handle(DeleteEmployeeCommand cmd, CancellationToken token)
    {
        if (cmd.Id.HasValue)
        {
            return await userRepo.DeleteByIdAsync(cmd.Id.Value);
        }
        else if (cmd.UserName is not null)
        {
            return await userRepo.DeleteByUsernameAsync(cmd.UserName);
        }
        else if (cmd.Email is not null)
        {
            return await userRepo.DeleteByEmailAsync(cmd.Email);
        }
        else return false;
    }
}
