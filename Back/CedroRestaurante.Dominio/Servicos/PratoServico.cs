using CedroRestaurante.Dominio.Entidades;
using CedroRestaurante.Dominio.Interfaces.Repositorios;
using CedroRestaurante.Dominio.Interfaces.Servicos;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Dominio.Servicos
{
    public class PratoServico : ServicoBase<Prato>, IPratoServico
    {
        public PratoServico(IPratoRepositorio repositorio)
            : base(repositorio)
        {

        }
    }
}
