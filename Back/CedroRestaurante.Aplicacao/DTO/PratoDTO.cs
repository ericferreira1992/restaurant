using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Aplicacao.DTO
{
    public class PratoDTO : DTOBase
    {
        public string Nome { get; set; }
        public double Preco { get; set; }
        public int RestauranteId { get; set; }
        
        public RestauranteDTO Restaurante { get; set; }
    }
}
