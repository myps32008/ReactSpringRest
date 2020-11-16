using Microsoft.EntityFrameworkCore;

namespace TestApp.Respository
{
    public class TestDbContext : DbContext
    {
        public TestDbContext(DbContextOptions<TestDbContext> options)
            : base(options)
        {
        }

    }
}
