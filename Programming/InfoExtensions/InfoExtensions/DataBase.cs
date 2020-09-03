using Microsoft.SqlServer.Management.Common;
using Microsoft.SqlServer.Management.Smo;
using System;
using System.Data.SqlClient;
using System.Data;
using System.Globalization;
using System.Collections.Generic;
using System.Configuration;

namespace InfoExtensions
{
    // ------------------------------------------------------------------------------
    // Funcion: acceder a la base de datos que tiene todos los empleados de LNO Honduras
    //          SqlConnection
    // Metodos: 
    //          DBConnection()
    //          DBDisconnect()
    //          getEmployees()
    //          addDepartment()
    //          addDepartmentToDepartment()
    // ------------------------------------------------------------------------------
    public class DataBase
    {
        // conexion a la base de datos.
        SqlConnection conn = null;

        // Funcion: establecer conexion con la base de datos. 
        // Parametros: ninguno.
        // Retorno:
        //          string  -> cadena de conexion con la base de datos.
        public string DBConnection()
        {

            ConnectionStringSettings connString = ConfigurationManager.ConnectionStrings["AnvizDatabaseCS"];
            conn = new SqlConnection(connString.ConnectionString);

            return conn.ConnectionString;
        }

        // Funcion: finalizar conexion con la base de datos. 
        // Parametros: ninguno. 
        // Retorno: ninguno.
        public void DBDisconnect()
        {
            if (conn != null)
                conn.Close();

            conn = null;
        }

        // Funcion: obtener todos los empleados de LNO Honduras
        // Parametros: ninguno. 
        // Retorno: List<Employee>    ->  lista con todos los empleados.
        public List<Employee> getEmployees()
        {
            List<Employee> employees = new List<Employee>();

            if (conn.State != ConnectionState.Open)
                conn.Open();

            string query = "select Userinfo.Name, Dept.DeptName, Dept.SupDeptid " +
                           "from Userinfo " +
                           "inner join Dept on Userinfo.Deptid = Dept.Deptid " +
                           "where Userinfo.Name != '' and Userinfo.Address != '' and Userinfo.Deptid != 33 " +
                           "order by Userinfo.Name asc";
            
            SqlCommand queryCommand = new SqlCommand(query, conn);

            SqlDataReader reader = queryCommand.ExecuteReader();

            while (reader.Read())
            {
                employees.Add(new Employee(reader.GetString(0), reader.GetString(1), Convert.ToString(reader.GetInt32(2))));
            }

            employees = addDepartment(employees);
            employees = addDepartmentToDepartment(employees);

            return employees;
        }

        // Funcion: obtener y asignar el departamento al que pertenecen los empleados si el equipo no es un departamento.
        // Parametros: List<Employee>   -> lista actualizada de todos los empleados.
        // Retorno: List<Employee>    ->  lista con todos los empleados.
        public List<Employee> addDepartment(List<Employee> employees)
        {
            bool isFind = false;
            foreach(Employee emp in employees)
            {
                if (emp.IdSupDept != "1")
                {
                    do
                    {
                        string query = "select Dept.DeptName, Dept.SupDeptid " +
                               "from Dept " +
                               "where Dept.Deptid = '" + emp.IdSupDept + "'";

                        SqlCommand queryCommand = new SqlCommand(query, conn);

                        SqlDataReader reader = queryCommand.ExecuteReader();

                        if (reader.Read())
                        {
                            if (reader.GetInt32(1) == 1)
                            {
                                emp.Department = reader.GetString(0);
                                isFind = true;
                            }
                            else
                            {
                                emp.IdSupDept = Convert.ToString(reader.GetInt32(1));
                                isFind = false;
                            }
                        }
                    } while (!isFind);
                }
            }
            
            return employees;
        }

        // Funcion: obtener y asignar el departamento al que pertenecen los empleados si el equipo es un departamento.
        // Parametros: List<Employee>   -> lista actualizada de todos los empleados.
        // Retorno: List<Employee>      ->  lista con todos los empleados.
        public List<Employee> addDepartmentToDepartment(List<Employee> employees)
        {
            foreach (Employee emp in employees)
            {
                if (emp.Department == null)
                {
                    emp.Department = emp.Team;
                }
            }

            return employees;
        }
    }
}