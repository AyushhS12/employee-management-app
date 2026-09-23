namespace Authentication.Infrastructure.Configs;

public class EmployeeConfig : IEntityTypeConfiguration<Employee>
{
    public void Configure(EntityTypeBuilder<Employee> builder)
    {
        builder
            .HasIndex(e => e.Username)
            .IsUnique();
        builder
            .HasIndex(e => e.Email)
            .IsUnique();
        builder
            .Property(e => e.Username)
            .HasMaxLength(120);
        builder
            .Property(e => e.Email)
            .HasMaxLength(100);

        builder
            .Property(e => e.CreatedAt)
            .HasDefaultValueSql("NOW()");

        builder
            .Property(e => e.Role)
            .HasDefaultValue(Role.Employee);
    }
}
