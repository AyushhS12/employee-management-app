namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeesByFuzzySearchQuery : IRequest<IList<EmployeeDTO>>
{
    public string Query { get; set; } = string.Empty;
}
