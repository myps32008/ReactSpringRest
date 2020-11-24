using Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace App.Base
{
    [ApiController]
    [Route("[controller]/[action]")]
    [EnableCors("CorsPolicy")]    
    public abstract class ProjectBaseController : ControllerBase
    {
        protected readonly ILoggerProject _logger;
        protected readonly IConfiguration _configuration;
        public ProjectBaseController(ILoggerProject logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }
    }
}
