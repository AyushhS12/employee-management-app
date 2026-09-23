namespace Authentication.Application.Queries.EmployeeQueries;

public class GetAllEmployeesQueryHandler(IEmployeeRepository userRepo, IMapper mapper) : IRequestHandler<GetAllEmployeesQuery, IList<EmployeeDTO>>
{
    public async Task<IList<EmployeeDTO>> Handle(GetAllEmployeesQuery query, CancellationToken token)
    {
        var emps = await userRepo.GetAllAsync();
        return mapper.Map<List<EmployeeDTO>>(emps);
    }
}
