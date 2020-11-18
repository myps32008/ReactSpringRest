using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{        
    public class EmployeeController : ProjectBaseController
    {
        private readonly IEmployeesRepository _employeeRepo;
        public EmployeeController(ILoggerProject logger, IEmployeesRepository employeesRepository) : base(logger)
        {
            _employeeRepo = employeesRepository;
        }
        [HttpGet]
        public IEnumerable<Employees> GetEmployee()
        {
            return _employeeRepo.FindAll().ToList();
        }
    }
}
