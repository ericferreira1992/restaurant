using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CedroRestaurante.Aplicacao.Interfaces;
using CedroRestaurante.Dominio.Entidades;
using CedroRestaurante.Servico.Api.Controllers;
using CedroRestaurante.Aplicacao.DTO;

namespace CedroRestaurante.Servico.Api.Controllers
{
    public class PratoController : ControllerBase<Prato, PratoDTO>
    {
        public PratoController(IPratoApp app)
            : base(app)
        { }
    }
}
