using AutoMapper;
using CedroRestaurante.Aplicacao.DTO;
using CedroRestaurante.Aplicacao.Interfaces;
using CedroRestaurante.Dominio.Entidades;
using CedroRestaurante.Dominio.Interfaces.Servicos;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Aplicacao.Servicos
{
    public class PratoApp : ServicoAppBase<Prato, PratoDTO>, IPratoApp
    {
        public PratoApp(IMapper iMapper, IPratoServico servico)
            : base(iMapper, servico)
        {

        }
    }
}
