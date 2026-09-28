using Authentication.Api.Models.EmployeeModels;

namespace Authentication.Api.Mapper;

public class Mapper : Profile
{
    public Mapper()
    {
        UserModelToAddUserCommand();
        LoginModelToLoginQuery();
        UserToUserDTO();
        UpdateModelToUpdateCommand();
        UpdateUserCommandToUpdateDTO();
        DeleteModelToDeleteCommand();
        AddEmployeeDTOToEmployee();
        AddEmployeeCMDToDTO();
        AddEmployeeModelToCMD();
        DepartmentModelToDTO();
        UpdateEmployeeDTOToEmployee();
        UpdateModelToUpdateCommandEmployee();
    }

    void UserModelToAddUserCommand()
    {
        CreateMap<AddEmployeeModel, AddEmployeeCommand>();
    }

    void LoginModelToLoginQuery()
    {
        CreateMap<LoginEmployeeModel, LoginEmployeeQuery>();
    }

    void UserToUserDTO()
    {
        CreateMap<Employee, EmployeeDTO>().ReverseMap();
        CreateMap<EmployeeModel, EmployeeDTO>().ReverseMap()
            .ForMember(u => u.Role, opt => opt.MapFrom(d => d.Role.ToString()))
            .ForPath(m => m.Department, opts => opts.MapFrom(d => d.Department.Name));
    }

    void UpdateModelToUpdateCommand()
    {
        CreateMap<EmployeeUpdateModel, UpdateEmployeeCommand>();
    }

    void UpdateModelToUpdateCommandEmployee()
    {
        CreateMap<UpdateEmployeeModel, UpdateEmployeeCommand>();
    }

    void UpdateUserCommandToUpdateDTO()
    {
        CreateMap<UpdateEmployeeCommand, UpdateEmployeeDTO>();
    }

    void UpdateEmployeeDTOToEmployee()
    {
        CreateMap<UpdateEmployeeDTO, Employee>()
            .ForPath(d => d.Department.Name, opt => opt.MapFrom(dto => dto.Department));
    }

    void DeleteModelToDeleteCommand()
    {
        CreateMap<DeleteEmployeeModel, DeleteEmployeeCommand>();
    }

    void AddEmployeeModelToCMD()
    {
        CreateMap<AddEmployeeModel, AddEmployeeCommand>();
    }
    void AddEmployeeCMDToDTO()
    {
        CreateMap<AddEmployeeCommand, AddEmployeeDTO>()
            .ForMember(d => d.Role, opt => opt.MapFrom(x => Enum.Parse<Role>(x.Role, true)));
    }

    void AddEmployeeDTOToEmployee()
    {
        CreateMap<AddEmployeeDTO, Employee>()
            .ForPath(e => e.Department.Name, opt => opt.MapFrom(d => d.Department));
    }

    void DepartmentModelToDTO()
    {
        CreateMap<AddDepartmentModel, AddDepartmentCommand>();
        CreateMap<DepartmentModel, DepartmentDTO>().ReverseMap();
        CreateMap<DepartmentDTO, Department>().ReverseMap();
        CreateMap<Department, GetDepartmentDTO>();
        CreateMap<GetDepartmentDTO, GetDepartmentModel>();
    }
}
