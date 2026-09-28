namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeesByIndexAndSizeQueryHandler(IMapper mapper, IEmployeeRepository empRepo) : IRequestHandler<GetEmployeesByIndexAndSizeQuery, (IList<EmployeeDTO>, int)>
{
    public async Task<(IList<EmployeeDTO>, int)> Handle(GetEmployeesByIndexAndSizeQuery query, CancellationToken token)
    {
        var data = await empRepo.GetByPageIndexAndSize(query.PageIndex, query.PageSize, query.Order);
        return (mapper.Map<IList<EmployeeDTO>>(data.Employees), data.Count);
    }
}
