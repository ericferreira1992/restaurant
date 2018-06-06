using CedroRestaurante.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Aplicacao.DTO
{
    public class RestauranteDTO : DTOBase
    {
        public string Nome { get; set; }

        public ICollection<PratoDTO> Pratos { get; set; }
    }
}
