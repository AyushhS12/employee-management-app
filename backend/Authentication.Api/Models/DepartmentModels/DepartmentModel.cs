using Authentication.Api.Models.EmployeeModels;

namespace Authentication.Api.Models.DepartmentModels;
public class DepartmentModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    public IList<EmployeeModel> Employees { get; set; } = [];
}
