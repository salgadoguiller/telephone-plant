using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comparative_Skype_Tigo
{
    class Call
    {
        public string Destination;
        public decimal Rate;
        public double Hours;
        public double Minutes;
        public double Seconds;
        public string Type;
        public decimal Price;
        public DateTime CallDate;

        public override string ToString()
        {
            return "##################################################################\n" +
                    "Country: " + Destination + "\n" +
                    "Duration: " + Hours + ":" + Minutes + ":" + Seconds + "\n" +
                    "Tarifa: " + Rate + "\n" +
                    "##################################################################\n";
        }

        public double getDurationInMinutes()
        {
            double totalMinutes = ((Hours * 60 * 60) + (Minutes * 60) + Seconds) / 60;

            return totalMinutes;
        }
    }
}
