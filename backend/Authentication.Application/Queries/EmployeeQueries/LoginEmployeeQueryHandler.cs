namespace Authentication.Application.Queries.EmployeeQueries;

internal class LoginEmployeeQueryHandler(IEmployeeRepository userRepo, IConfiguration _configuration, IPasswordHasher<Employee> hasher) : IRequestHandler<LoginEmployeeQuery, string?>
{
    public async Task<string?> Handle(LoginEmployeeQuery query, CancellationToken token)
    {
        var user = await userRepo.GetByUsernameAsync(query.Username);
        if (user is null)
        {
            return null;
        }

        var result = hasher.VerifyHashedPassword(user, user.Password, query.Password);
        if (result == PasswordVerificationResult.Success)
            return GenerateToken(user);
        return null;
    }

    private string GenerateToken(Employee user)
    {
        var key = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT key is missing");
        List<Claim> claims = [
                new Claim(Constants.SUB, user.Id.ToString()),
                new Claim(Constants.USERNAME,user.Username),
                new Claim(JwtRegisteredClaimNames.Name, user.Name),
                new Claim(JwtRegisteredClaimNames.Email,user.Email),
                new Claim(Constants.ROLE,user.Role.ToString())
            ];
        var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var creds = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds
            );
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
