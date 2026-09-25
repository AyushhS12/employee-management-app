namespace Authentication.Application.Queries.DepartmentQueries;

public class GetDepartmentByNameQueryHandler(IMapper mapper, IDepartmentRepository deptRepo) : IRequestHandler<GetDepartmentByNameQuery, IList<EmployeeDTO>>
{
    public async Task<IList<EmployeeDTO>> Handle(GetDepartmentByNameQuery query, CancellationToken token)
    {
        return mapper.Map<IList<EmployeeDTO>>(await deptRepo.GetAllEmployeesOfDepartmentAsync(query.Name));
    }
}
