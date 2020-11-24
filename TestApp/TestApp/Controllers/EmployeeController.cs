using App.Base;
using AutoMapper;
using Contracts;
using DTO;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

namespace App.Controllers
{    
    public class EmployeeController : ProjectBaseController
    {
        private readonly IEmployeesRepository _employeeRepo;
        private readonly IMapper _mapper;
        public EmployeeController(
            ILoggerProject logger, 
            IConfiguration configuration,
            IEmployeesRepository employeesRepository,
            IMapper mapper)
            : base(logger, configuration)
        {
            _employeeRepo = employeesRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public IEnumerable<Employees> GetEmployee()
        {
            return _employeeRepo.FindAll().ToList();
        }
        [HttpGet]
        public BaseResult<EmployeeDTO> FindEmployee(int id)
        {
            var result = _employeeRepo.FindByCondition(x => x.EmployeeID == id).FirstOrDefault();
            var test = _mapper.Map<EmployeeDTO>(result);
            return new BaseResult<EmployeeDTO>()
            {
                Data = test,
                Code = (int)RequestCode.SUCCESS
            };
        }
    }
}
