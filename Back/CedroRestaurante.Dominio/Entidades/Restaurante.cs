using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Dominio.Entidades
{
    public class Restaurante : EntidadeBase
    {
        public string Nome { get; set; }

        public ICollection<Prato> Pratos { get; set; }
    }
}
