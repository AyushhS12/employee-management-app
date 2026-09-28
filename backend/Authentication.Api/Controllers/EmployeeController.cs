using Authentication.Api.Models.EmployeeModels;

namespace Authentication.Api.Controllers;

[Route("api/employee")]
[ApiController]
//[Authorize]
public class EmployeeController(ILogger<EmployeeController> logger, IMapper mapper, IMediator mediator) : ControllerBase
{
    [HttpGet("profile")]
    public async Task<IActionResult> GetProfile()
    {
        string? stringId = User.FindFirstValue(Constants.SUB);
        if (stringId is null)
        {
            logger.LogError("User not logged in");
            throw new ArgumentNullException("User Id is null");
        }
        int id = int.Parse(stringId);
        var user = await mediator.Send(new GetEmployeeQuery { Id = id });
        return Ok(new { Message = "Profile Route", Role = User.Claims.Select(c => c.Type), User = mapper.Map<EmployeeModel>(user) });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        return Ok(mapper.Map<EmployeeModel>(await mediator.Send(new GetEmployeeQuery { Id = id })));
    }
    //[Authorize("AdminOnly")]
    [HttpGet("all")]
    public async Task<IActionResult> GetUsers()
    {
        logger.LogInformation("Getting all Users");
        var emps = await mediator.Send(new GetAllEmployeesQuery());
        return Ok(mapper.Map<IList<EmployeeModel>>(emps));
    }

    [Authorize("AdminOnly")]
    [HttpDelete("delete")]
    public async Task<IActionResult> DeleteUser(DeleteEmployeeModel model)
    {
        logger.LogInformation("Deleting User...");
        return Ok(new { Success = await mediator.Send(mapper.Map<DeleteEmployeeCommand>(model)) });
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateUser(UpdateEmployeeModel model)
    {
        //Console.WriteLine(model.Id);
        var res = await mediator.Send(mapper.Map<UpdateEmployeeCommand>(model));
        return Ok(new { Success = res });
    }

    //[HttpPatch("update")]
    //public async Task<IActionResult> UpdateUser(EmployeeUpdateModel model)
    //{
    //    var cmd = mapper.Map<UpdateEmployeeCommand>(model);
    //    string? id;
    //    if ((id = User.FindFirstValue(Constants.SUB)) is null)
    //    {
    //        return Unauthorized(new { Error = "Invalid Token" });
    //    }
    //    cmd.Id = int.Parse(id);
    //    var res = await mediator.Send(cmd);
    //    return Ok(new { Success = res });
    //}

    [Authorize("AdminOnly")]
    [HttpGet("paged-list")]
    public async Task<IActionResult> GetEmployeesByPageIndexAndSize([FromQuery] int index, [FromQuery] int size, [FromQuery] string? order)
    {
        try
        {
            var query = new GetEmployeesByIndexAndSizeQuery { PageIndex = index, PageSize = size };
            if (order is not null)
            {
                query.Order = order;
            }
            try
            {
                var dtos = await mediator.Send(query);
                logger.LogInformation("Getting paged list with index = {Index} and size = {Size}", index, size);
                return Ok(mapper.Map<IList<EmployeeModel>>(dtos));
            }
            catch (InvalidOperationException ex)
            {

                return BadRequest(new { Error = ex.Message });
            }
        }
        catch (InvalidDataException ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("exists/{username}")]
    public async Task<IActionResult> CheckUsernameExists([FromRoute] string username)
    {
        var response = await mediator.Send(new CheckUsernameQuery { Username = username });
        if (response is not null)
        {
            return Ok(new { Exists = true });
        }
        return Ok(null);
    }

    //[Authorize("AdminOnly")]
    //[HttpPut("update/{id}")]
    //public async Task<IActionResult> UpdateEmployee(int id, UpdateEmployeeModel model)
    //{
    //    var res = await mediator.Send(new UpdateEmployeeCommand { Id = id, Property = model.Property, Value = model.Value });
    //    return Ok(new { Success = res });
    //}
}