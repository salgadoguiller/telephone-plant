using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace InfoExtensions
{
    // ------------------------------------------------------------------------------
    // Funcion: llamar al metodo encargado de generar todas las extensiones.
    // Propiedades: no tiene ninguna propiedad.
    // Metodos: 
    //          Main    -> ejecuta el metodo para generar extensiones. 
    // ------------------------------------------------------------------------------
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Generating Extensions............");

            Thread.Sleep(2000);

            ExtensionsGenerator.generateExtensions();

            Console.ReadLine();
            Console.WriteLine("Success. Finalizing....");
            Thread.Sleep(2000);
        }
    }
}
