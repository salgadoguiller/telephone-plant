using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Comparative_Skype_Tigo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting Comparison");

            Thread.Sleep(2000);

            Comparative comp = new Comparative();
            comp.executeComparative();

            Console.ReadLine();
            Console.WriteLine("Success. Finalizing....");
            Thread.Sleep(2000);
        }
    }
}
