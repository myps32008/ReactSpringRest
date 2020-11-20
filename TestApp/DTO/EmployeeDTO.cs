using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class EmployeeDTO
    {
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        public int? ReportsTo { get; set; }
        public string PhotoPath { get; set; }
    }
}
