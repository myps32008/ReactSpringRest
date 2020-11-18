using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Entities;
using Contracts;
using Repository;
using Service.Helper;

namespace App.Extension
{
    public static class ServiceExtension
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
        }
        public static void ConfigureDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<RepositoryContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
        }
        public static void ConfigureRepository(this IServiceCollection services)
        {
            services.AddScoped<IEmployeesRepository, EmployeesRepository>();
            services.AddSingleton<ILoggerProject, LoggerService>();
        }
        public static void ConfigureHelper(this IServiceCollection services)
        {            
            services.AddSingleton<ILoggerProject, LoggerService>();
        }
    }
}
