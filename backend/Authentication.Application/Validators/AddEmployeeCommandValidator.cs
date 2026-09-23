using Authentication.Application.Commands.EmployeeCommands;

namespace Authentication.Application.Validators;

public class AddEmployeeModelValidator : AbstractValidator<AddEmployeeCommand>
{
    public AddEmployeeModelValidator()
    {
        //RuleFor(m => m.Email)
        //    .NotEmpty()
        //    .EmailAddress()
        //    .MaximumLength(120);

        //RuleFor(m => m.Name)
        //    .NotEmpty()
        //    .MaximumLength(100)
        //    .MinimumLength(3);

        //RuleFor(m => m.Department)
        //    .NotEmpty()
        //    .MinimumLength(2)
        //    .MaximumLength(40);

        //RuleFor(m => m.Password)
        //    .NotEmpty()
        //    .MinimumLength(8)
        //    .Matches("[A-Z]")
        //    .WithMessage("Password must contain at least one uppercase letter")
        //    .Matches("[a-z]")
        //    .WithMessage("Password must contain at least one lowercase letter")
        //    .Matches("[0-9]")
        //    .WithMessage("Password must contain at least one numeric value")
        //    .Matches("[^a-zA-Z0-9]")
        //    .WithMessage("Password must contain at least one numeric value");

        //RuleFor(m => m.Username)
        //    .NotEmpty()
        //    .MinimumLength(3)
        //    .MaximumLength(100);

        //RuleFor(m => m.Role)
        //    .NotEmpty()
        //    .MinimumLength(3)
        //    .MaximumLength(30);
    }
}
