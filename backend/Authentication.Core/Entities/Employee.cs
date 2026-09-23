namespace Authentication.Core.Entities;

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public Role Role { get; set; }
    public int DepartmentId { get; set; }
    public Department Department { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}
