namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeeByFuzzySearchQueryHandler(IMapper mapper,IEmployeeRepository empRepo): IRequestHandler<GetEmployeesByFuzzySearchQuery, IList<EmployeeDTO>>
{
    public async Task<IList<EmployeeDTO>> Handle(GetEmployeesByFuzzySearchQuery query, CancellationToken token)
    {
        return mapper.Map<IList<EmployeeDTO>>(await empRepo.FuzzySearch(query.Query));
    }
}
