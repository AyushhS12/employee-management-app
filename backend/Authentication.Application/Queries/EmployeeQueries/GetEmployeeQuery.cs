namespace Authentication.Application.Queries.EmployeeQueries;

public class GetEmployeeQuery: IRequest<EmployeeDTO>
{
    public int Id { get; set; }
}
