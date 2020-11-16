using Microsoft.EntityFrameworkCore;
using TestApp.Entities;

namespace TestApp.Respository
{
    public class TestDbContext : DbContext
    {
        public TestDbContext(DbContextOptions<TestDbContext> options)
            : base(options)
        {            
        }
        public DbSet<EmployeeEntities> Employees { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeEntities>().ToTable("Employees");            
        }
    }
}
