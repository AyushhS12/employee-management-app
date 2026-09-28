namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeesByIndexAndSizeQuery : IRequest<(IList<EmployeeDTO>, int)>
{
    public int PageIndex { get; set; }
    public int PageSize { get; set; }

    public string Order { get; set; } = "asc";
}
