namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeesByIndexAndSizeQueryHandler(IMapper mapper, IEmployeeRepository empRepo) : IRequestHandler<GetEmployeesByIndexAndSizeQuery, IList<EmployeeDTO>>
{
    public async Task<IList<EmployeeDTO>> Handle(GetEmployeesByIndexAndSizeQuery query, CancellationToken token)
    {
        return mapper.Map<IList<EmployeeDTO>>(await empRepo.GetByPageIndexAndSize(query.PageIndex, query.PageSize, query.Order));
    }
}
