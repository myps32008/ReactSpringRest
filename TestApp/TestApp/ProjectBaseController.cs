using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace App
{        
    public abstract class ProjectBaseController : ControllerBase
    {
        protected readonly ILoggerProject _logger;
        public ProjectBaseController(ILoggerProject logger)
        {
            _logger = logger;
        }
    }
}
