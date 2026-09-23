namespace Authentication.Core.Entities;

public class Department
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    public IList<Employee> Employees { get; set; } = [];
}
