namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeeQueryHandler(IMapper mapper, IEmployeeRepository userRepo) : IRequestHandler<GetEmployeeQuery, EmployeeDTO>
{
    public async Task<EmployeeDTO> Handle(GetEmployeeQuery query, CancellationToken token)
    {
        var user = await userRepo.GetByIdAsync(query.Id);
        return mapper.Map<EmployeeDTO>(user);
    }
}
