
using Authentication.Api.Models.EmployeeModels;

namespace Authentication.Api.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController(ILogger<AuthController> logger, IMapper mapper, IMediator mediator) : ControllerBase
{
    [HttpPost("signup")]
    public async Task<IActionResult> AddEmployee(AddEmployeeModel model)
    {
        var cmd = mapper.Map<AddEmployeeCommand>(model);
        try
        {
            var (userId, message) = await mediator.Send(cmd);
            if (userId is null)
                return BadRequest(new { Error = message });
            return Ok(new { InsertedId = userId });
        }
        catch (DbUpdateException ex)
        {
            logger.LogError("Database Error: {Error}", ex.Message);
            return BadRequest(new { Error = "email or username already exists" });
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> AuthenticateUser(LoginEmployeeModel model)
    {
        var cmd = mapper.Map<LoginEmployeeQuery>(model);
        var token = await mediator.Send(cmd);
        if (token is null)
        {
            return Unauthorized(new { Error = "invalid credentials" });
        }
        return Ok(new { Token = token });
    }

}
