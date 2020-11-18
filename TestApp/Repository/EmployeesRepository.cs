using Contracts;
using Entities;
using Entities.Models;

namespace Repository
{
    public class EmployeesRepository : RepositoryBase<Employees>, IEmployeesRepository
    {
        public EmployeesRepository(RepositoryContext context) : base(context) { }
    }
}
