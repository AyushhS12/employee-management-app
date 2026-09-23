namespace Authentication.Api;

public static class Extensions
{
    public static void AddConfigurations(this IServiceCollection services, string key)
    {
        services.AddSingleton<IPasswordHasher<Employee>, PasswordHasher<Employee>>();
        //services.AddSingleton<PasswordHasher<User>>();
        services.AddCommandsAndQueries();
        services.AddAuthenticationMethod(key);
        services.AddAuthorizationMethod();

        services.AddAutoMapper(typeof(Mapper.Mapper));
        services.AddCorsPolicy();
    }

    static void AddAuthorizationMethod(this IServiceCollection services)
    {
        services.AddAuthorization(schemes => schemes.AddPolicy("AdminOnly", policy => policy.RequireRole(Role.Admin.ToString(), Role.Manager.ToString(), Role.Executive.ToString())));
    }

    static void AddAuthenticationMethod(this IServiceCollection services, string key)
    {
        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt =>
            {
                opt.MapInboundClaims = false;
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
                    ClockSkew = TimeSpan.Zero,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    RoleClaimType = Constants.ROLE
                };
            });
    }

    static void AddCorsPolicy(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("DevFrontend", policy =>
            {
                policy.WithOrigins("http://localhost:4200")
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
        });
    }
}