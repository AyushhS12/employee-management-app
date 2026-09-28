using Authentication.Api.Models.EmployeeModels;

namespace Authentication.Api.Controllers;

[Route("api/department")]
[ApiController]
//[Authorize("AdminOnly")]
public class DepartmentController(IMapper mapper, IMediator mediator) : ControllerBase
{
    [Authorize("AdminOnly")]
    [HttpPost("add")]
    public async Task<IActionResult> AddDepartment(AddDepartmentModel model)
    {
        var cmd = mapper.Map<AddDepartmentCommand>(model);
        var res = await mediator.Send(cmd);
        //int? res = 999;
        if (res is null) return BadRequest(new { Error = "Couldn't add department" });
        return Ok(new { InsertedId = res });
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllDepartments()
    {
        return Ok(mapper.Map<IList<DepartmentModel>>(await mediator.Send(new GetAllDepartmentsQuery { })));
    }

    [HttpGet("{name}")]
    public async Task<IActionResult> GetDepartmentByName([FromRoute] string name)
    {
        var emps = mapper.Map<IList<EmployeeModel>>(
                await mediator.Send(
                    new GetDepartmentByNameQuery { Name = name }
                )
            );
        return Ok(new { Employees = emps });
    }

    [Authorize("AdminOnly")]
    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteDepartment([FromRoute] int id)
    {
        var res = await mediator.Send(new DeleteDepartmentCommand { Id = id });
        if (res) return Ok(new { Success = true, Message = "Department deleted successfully" });
        else return NotFound(new {Error = $"Department with id={id} not found"});
    }
}
