using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CedroRestaurante.Aplicacao.Interfaces;
using CedroRestaurante.Servico.Api.Controllers;
using CedroRestaurante.Dominio.Entidades;
using CedroRestaurante.Aplicacao.DTO;

namespace CedroRestaurante.Servico.Api.Controllers
{
    public class RestauranteController : ControllerBase<Restaurante, RestauranteDTO>
    {
        public RestauranteController(IRestauranteApp app)
            : base(app)
        { }
    }
}
