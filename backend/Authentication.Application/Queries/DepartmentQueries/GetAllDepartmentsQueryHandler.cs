namespace Authentication.Application.Queries.DepartmentQueries;

public class GetAllDepartmentsQueryHandler(IMapper mapper, IDepartmentRepository deptRepo) : IRequestHandler<GetAllDepartmentsQuery, IList<DepartmentDTO>>
{
    public async Task<IList<DepartmentDTO>> Handle(GetAllDepartmentsQuery query, CancellationToken token)
    {
        return mapper.Map<IList<DepartmentDTO>>(await deptRepo.GetAllAsync());
    }
}
