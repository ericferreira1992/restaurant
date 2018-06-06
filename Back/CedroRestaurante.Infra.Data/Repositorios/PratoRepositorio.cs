using CedroRestaurante.Dominio.Entidades;
using CedroRestaurante.Dominio.Interfaces.Repositorios;
using CedroRestaurante.Dominio.Interfaces.Servicos;
using CedroRestaurante.Infra.Data.Contextos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CedroRestaurante.Infra.Data.Repositorios
{
    public class PratoRepositorio : RepositorioBase<Prato>, IPratoRepositorio
    {
        public PratoRepositorio(Contexto contexto)
            : base(contexto)
        {
        }
    }
}
