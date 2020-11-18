using App.Base;
using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        [HttpGet]
        public BaseResult<Employees> FindEmployee(int id)
        {
            var result = _employeeRepo.FindByCondition(x => x.EmployeeID == id).FirstOrDefault();            
            return new BaseResult<Employees>() { 
                Data = result,
                Code = (int)RequestCode.SUCCESS
            };
        }
    }
}
