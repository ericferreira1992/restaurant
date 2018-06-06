using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Dominio.Entidades
{
    public class Prato : EntidadeBase
    {
        public string Nome { get; set; }
        public double Preco { get; set; }
        public int RestauranteId { get; set; }
        
        public Restaurante Restaurante { get; set; }
    }
}
