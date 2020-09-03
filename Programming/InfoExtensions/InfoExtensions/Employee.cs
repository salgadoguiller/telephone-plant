using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoExtensions
{
    // ------------------------------------------------------------------------------
    // Funcion: almacenar informacion de un empleado.
    // Propiedades:
    //          Name
    //          Team
    //          Department
    //          IdSupDept
    // Metodos: 
    //          Constructor
    // ------------------------------------------------------------------------------
    public class Employee
    {
        public string Name { get; set; }
        public string Team { get; set; }
        public string Department { get; set; }
        public string IdSupDept { get; set; }

        public Employee(string name, string team, string idSupDept)
        {
            this.Name = name;
            this.Team = team;
            this.IdSupDept = idSupDept;
        }
    }
}
