
using Authentication.Api.Models.DepartmentModels;

namespace Authentication.Api.Controllers;

[Route("api/department")]
[ApiController]
//[Authorize("AdminOnly")]
public class DepartmentController(IMapper mapper, IMediator mediator) : ControllerBase
{
    [HttpPost("add")]
    public async Task<IActionResult> AddDepartment(AddDepartmentModel model)
    {
        var cmd = mapper.Map<AddDepartmentCommand>(model);
        var res = await mediator.Send(cmd);
        if (res is null) return BadRequest(new { Error = "Couldn't add department" });
        return Ok(new { InsertedId = res });
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllDepartments()
    {
        return Ok(mapper.Map<IList<DepartmentModel>>(await mediator.Send(new GetAllDepartmentsQuery { })));
    }
}
