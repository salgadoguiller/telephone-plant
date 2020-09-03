using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using DocumentFormat.OpenXml;
using ClosedXML.Excel;
using System.Windows.Forms;

namespace InfoExtensions
{
    // ------------------------------------------------------------------------------
    // Funcion: generar un archivo de excel y un documento de texto con la informacion de
    //          las extensiones para cada empleado de LNO Honduras y 15 extensiones
    //          libres para asignar cuando sea requerido (ej: nuevos empleados)
    // Propiedades: no tiene ninguna propiedad.
    // Metodos: 
    //          generateExtensions  ->  obtener los empleados de la base de datos, crear extensiones, generar excel y documento de texto (txt).
    //          getEmployees        ->  obtener todos los empleados de la base de datos con su respectivo equipo y departamento.
    //          createExtensions    ->  crear una extension(UserExtension,DisplayName,CIDNumAlias,SIPAlias,CallWaiting,Secret,StatusVoiceMail,VoiceMailPass,PIN,Team,Department) para cada empleado y 15 adicionales.
    //          generateExcel       ->  almacenar en un archivo de excel la información de todas las extensiones creadas.
    //          generateText        ->  almacenar en un archivo de texto la información de todas las extensiones creadas.
    // ------------------------------------------------------------------------------
    class ExtensionsGenerator
    {
        public static void generateExtensions()
        {
            List<Employee> employees = getEmployees();
            List<Extension> extensions = createExtensions(employees);

            foreach (Extension ext in extensions)
            {
                Console.WriteLine(ext.ToString());
            }

            generateExcel(extensions);
            generateText(extensions);
        }

        public static List<Employee> getEmployees()
        {
            // Instancia de la clase DataBase que interactua directamente con la base de datos
            // para obtener información de los empleados de LNO.
            DataBase dbc = new DataBase();
            List<Employee> employees = new List<Employee>();

            try
            {
                // Conectando con la base de datos.
                dbc.DBConnection();

                // Ejecutando metodo que obtiene los empleados.
                employees = dbc.getEmployees();
            }
            catch (Exception ex)
            {
                // Extensiones no generadas
                Console.WriteLine("Error conecting to database.");
                Console.WriteLine(ex.Message);
                Thread.Sleep(5000);
            }
            finally
            {
                dbc.DBDisconnect();
            }

            return employees;
        }

        private static List<Extension> createExtensions(List<Employee> employees)
        {
            List<Extension> extensions = new List<Extension>();

            Random rand = new Random(DateTime.Now.Millisecond);

            for (int index = 0; index < employees.Count; index++)
            {
                string userExt = Convert.ToString(1000 + index);

                Extension ext = new Extension(userExt, employees[index].Name, userExt, userExt, Convert.ToString(rand.Next(1000, 9999)), Convert.ToString(rand.Next(1000, 9999)), employees[index].Team, employees[index].Department);

                extensions.Add(ext);
            }

            for (int index = 0; index < 15; index++)
            {
                string userExt = Convert.ToString(1000 + employees.Count + index);

                Extension ext = new Extension(userExt, "Sin Asignar " + Convert.ToString(index + 1), userExt, userExt, Convert.ToString(rand.Next(1000, 9999)), Convert.ToString(rand.Next(1000, 9999)), "Sin Asignar " + Convert.ToString(index + 1), "Sin Asignar " + Convert.ToString(index + 1));

                extensions.Add(ext);
            }

                return extensions;
        }

        private static void generateExcel(List<Extension> extensions)
        {
            var workbook = new XLWorkbook();
            var worksheet = workbook.Worksheets.Add("Extensions");

            worksheet.Cell("A1").Value = "User Extension";
            worksheet.Cell("B1").Value = "Display Name";
            worksheet.Cell("C1").Value = "Team";
            worksheet.Cell("D1").Value = "Department";
            worksheet.Cell("E1").Value = "CID Num Alias";
            worksheet.Cell("F1").Value = "SIP Alias";
            worksheet.Cell("G1").Value = "Call Waiting";
            worksheet.Cell("H1").Value = "Secret";
            worksheet.Cell("I1").Value = "Status [Voicemail]";
            worksheet.Cell("J1").Value = "Voicemail Password";
            worksheet.Cell("K1").Value = "PIN";
            

            for (int index = 0; index < extensions.Count; index++ )
            {
                int indexCell = index + 2;
                worksheet.Cell("A" + indexCell).Value = extensions[index].UserExtension;
                worksheet.Cell("B" + indexCell).Value = extensions[index].DisplayName;
                worksheet.Cell("C" + indexCell).Value = extensions[index].Team;
                worksheet.Cell("D" + indexCell).Value = extensions[index].Department;
                worksheet.Cell("E" + indexCell).Value = extensions[index].CIDNumAlias;
                worksheet.Cell("F" + indexCell).Value = extensions[index].SIPAlias;
                worksheet.Cell("G" + indexCell).Value = extensions[index].CallWaiting;
                worksheet.Cell("H" + indexCell).Value = extensions[index].Secret;
                worksheet.Cell("I" + indexCell).Value = extensions[index].StatusVoiceMail;
                worksheet.Cell("J" + indexCell).Value = extensions[index].VoiceMailPass;
                worksheet.Cell("K" + indexCell).Value = extensions[index].PIN;
            }

            worksheet.Columns().AdjustToContents();


            workbook.SaveAs(Application.StartupPath + "//Excell//Extensions.xlsx");
        }

        private static void generateText(List<Extension> extensions)
        {
            using (System.IO.StreamWriter file = new System.IO.StreamWriter(Application.StartupPath + "//Excell//Extensions.txt"))
            {
                file.WriteLine("[");
                foreach (Extension ext in extensions)
                {
                    file.WriteLine(ext.ToString() + ", ");
                }
                file.WriteLine("]");
            }
        }
    }
}
