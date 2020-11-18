using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace App
{
    [ApiController]
    [Route("[controller]/[action]")]
    public abstract class ProjectBaseController : ControllerBase
    {
        protected readonly ILoggerProject _logger;
        public ProjectBaseController(ILoggerProject logger)
        {
            _logger = logger;
        }
    }
}
