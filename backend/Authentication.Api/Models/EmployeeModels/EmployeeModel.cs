namespace Authentication.Api.Models.EmployeeModels;

public class EmployeeModel
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    //public GetDepartmentModel Department { get; set; } = null!;

    public string Department { get; set; } = string.Empty;
    //public string JoinedAt { get; set; } = string.Empty;
    //public TimeSpan JoiningTime { get; set; }
}
