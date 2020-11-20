using Contracts;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace App.Base
{
    [ApiController]
    [Route("[controller]/[action]")]
    [EnableCors("CorsPolicy")]
    public abstract class ProjectBaseController : ControllerBase
    {
        protected readonly ILoggerProject _logger;
        public ProjectBaseController(ILoggerProject logger)
        {
            _logger = logger;
        }
    }
}
