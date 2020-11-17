﻿using System;
using System.ComponentModel.DataAnnotations;

namespace TestApp.Entities
{
    public class EmployeeEntities
    {
        [Key]
        public int EmployeeID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        public int? ReportsTo { get; set; }
        public string PhotoPath { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string Postalcode { get; set; }
        public string HomePhone { get; set; }
    }
}
