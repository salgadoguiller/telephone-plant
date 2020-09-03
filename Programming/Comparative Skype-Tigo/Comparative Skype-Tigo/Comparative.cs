using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LinqToExcel;
using DocumentFormat.OpenXml;
using ClosedXML.Excel;
using System.Windows.Forms;

namespace Comparative_Skype_Tigo
{
    class Comparative
    {
        public void executeComparative()
        {
            createExcel(Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Reporte");

            // Reporte Enero-Julio
            List<Call> calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            List<Call> callsByDestination = getCallsByDestination(calls);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Enero-Julio");

            // Reporte Enero
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            List<Call> callsByMonth = getCallsByMonth(calls, 1);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Enero");

            // Reporte Febrero
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 2);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Febrero");

            // Reporte Marz
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 3);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Marzo");

            // Reporte Abril
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 4);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Abril");

            // Reporte Mayo
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 5);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Mayo");

            // Reporte Junio
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 6);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Junio");

            // Reporte Julio
            calls = readExcell(Application.StartupPath + "//Excel//Report01To07.xlsx", "Report01To07");
            callsByMonth = getCallsByMonth(calls, 7);
            callsByDestination = getCallsByDestination(callsByMonth);
            writeCallByDestination(callsByDestination, Application.StartupPath + "//Excel//ReporteSkype.xlsx", "Julio");
        }

        public void createExcel(string path, string worksheetName)
        {
            var workbook = new XLWorkbook();
            var worksheet = workbook.Worksheets.Add(worksheetName);
            workbook.SaveAs(path);

        }

        public List<Call> readExcell(string path, string file)
        {
            var book = new ExcelQueryFactory(path);
            var calls = (from row in book.Worksheet(file)
                             let callDuration = new Call
                             {
                                 Destination = row["Destino"].Cast<string>(),
                                 Hours = row["Duración"].Cast<DateTime>().Hour,
                                 Minutes = row["Duración"].Cast<DateTime>().Minute,
                                 Seconds = row["Duración"].Cast<DateTime>().Second,
                                 Rate = row["Tarifa/min"].Cast<decimal>(),
                                 Type = row["Tipo"].Cast<string>(),
                                 Price = row["Cantidad"].Cast<decimal>(),
                                 CallDate = row["Fecha"].Cast<DateTime>(),
                             }
                             select callDuration).ToList();

            book.Dispose();

            // calls = deleteCallsCost0(calls);

            return calls;
        }

        public List<Call> deleteCallsCost0(List<Call> calls)
        {
            List<Call> callsTemp = new List<Call>();

            foreach (Call c in calls)
            {
                if (c.Price == 0.00m)
                {
                    callsTemp.Add(c);
                }
            }

            foreach (Call c in callsTemp)
            {
                calls.Remove(c);
            }

            return calls;
        }

        public List<Call> getCallsByMonth(List<Call> calls, int month)
        {
            List<Call> callsByMonth = new List<Call>();

            foreach (Call c in calls)
            {
                if (c.CallDate.Month == month)
                {
                    callsByMonth.Add(c);
                }
            }

            return callsByMonth;
        }

        public List<Call> getCallsByDestination(List<Call> calls)
        {
            List<Call> callsByDestination = new List<Call>();

            foreach (Call cd in calls)
            {
                Console.Write(cd.CallDate.Month);
                bool isNew = true;
                int index = -1;
                foreach (Call cbd in callsByDestination)
                {
                    index++;
                    if (cd.Destination == cbd.Destination && cd.Type == cbd.Type)
                    {
                        isNew = false;
                        break;
                    }
                }
                if (isNew)
                {
                    callsByDestination.Add(cd);
                }
                else
                {
                    callsByDestination[index].Hours = callsByDestination[index].Hours + cd.Hours;
                    callsByDestination[index].Minutes = callsByDestination[index].Minutes + cd.Minutes;
                    callsByDestination[index].Seconds = callsByDestination[index].Seconds + cd.Seconds;
                    callsByDestination[index].Price = callsByDestination[index].Price + cd.Price;
                }
            }

            return callsByDestination;
        }

        public void writeCallByDestination(List<Call> callsByDestination, string path, string worksheetName)
        {
            var workbook = new XLWorkbook(path);
            var worksheet = workbook.Worksheets.Add(worksheetName);

            worksheet.Cell("A1").Value = "Destino";
            worksheet.Cell("B1").Value = "Tipo";
            worksheet.Cell("C1").Value = "Duración (Min)";
            worksheet.Cell("D1").Value = "Tarifa/Min";
            worksheet.Cell("E1").Value = "Cantidad";


            for (int index = 0; index < callsByDestination.Count; index++)
            {
                int indexCell = index + 2;

                worksheet.Cell("A" + indexCell).Value = callsByDestination[index].Destination;
                worksheet.Cell("B" + indexCell).Value = callsByDestination[index].Type;
                worksheet.Cell("C" + indexCell).Value = callsByDestination[index].getDurationInMinutes();
                worksheet.Cell("D" + indexCell).Value = callsByDestination[index].Rate;
                worksheet.Cell("E" + indexCell).Value = callsByDestination[index].Price;
            }

            worksheet.Columns().AdjustToContents();


            workbook.SaveAs(path);
        }
    }
}
