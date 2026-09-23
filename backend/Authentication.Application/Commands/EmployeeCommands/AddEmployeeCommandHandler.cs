namespace Authentication.Application.Commands.EmployeeCommands;

public class AddEmployeeCommandHandler(
    ILogger<AddEmployeeCommandHandler> logger,
    IValidator<AddEmployeeCommand> validator,
    IMapper mapper,
    IEmployeeRepository userRepo,
    IPasswordHasher<Employee> hasher)
    : IRequestHandler<AddEmployeeCommand, (int?, string?[])>
{
    public async Task<(int?, string?[])> Handle(AddEmployeeCommand cmd, CancellationToken token)
    {
        var result = validator.Validate(cmd);
        if (!result.IsValid)
        {
            List<string> err = [];
            foreach (var error in result.Errors)
            {
                logger.LogError("Validation Failed, error message: {Error}", error.ErrorMessage);
                err.Add(error.ErrorMessage);
            }
            return (null, err.ToArray());
        }
        var user = mapper.Map<AddEmployeeDTO>(cmd);
        user.Password = hasher.HashPassword(null!, user.Password);
        var (id, errorMessage) = await userRepo.AddAsync(user);
        Console.WriteLine(id);
        return (id, [errorMessage]);
    }
}
