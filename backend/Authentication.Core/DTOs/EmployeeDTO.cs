namespace Authentication.Core.DTOs;

public class EmployeeDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public GetDepartmentDTO Department { get; set; } = null!;
    public Role Role { get; set; }
    public DateTime CreatedAt { get; set; }
}
