namespace Authentication.Application.Queries.DepartmentQueries;

public class GetDepartmentByNameQuery : IRequest<IList<EmployeeDTO>>
{
    public string Name { get; set; } = string.Empty;
}
