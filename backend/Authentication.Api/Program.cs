using Authentication.Core.Abstractions.Repositories;
using Microsoft.AspNetCore.Cors.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

//Custom Configuration
var key = builder.Configuration["Jwt:Key"] ?? throw new InvalidOperationException("Jwt key is not present");
builder.Services.AddConfigurations(key);


var connectionString = builder.Configuration["PostgresDB:ConnectionString"];
builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(connectionString));


var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    using (var scoped = app.Services.CreateScope())
    {
        var context = scoped.ServiceProvider.GetRequiredService<AppDbContext>();

        await context.Database.MigrateAsync();
    }
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

app.UseCors("DevFrontend");

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
