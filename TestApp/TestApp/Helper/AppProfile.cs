using AutoMapper;
using DTO;
using Entities.Models;

namespace App.Helper
{
    public class AppProfile : Profile
    {
        public AppProfile()
        {
            CreateMap<Employees, EmployeeDTO>();
        }
    }
}
