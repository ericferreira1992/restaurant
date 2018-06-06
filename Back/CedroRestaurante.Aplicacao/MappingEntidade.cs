using AutoMapper;
using CedroRestaurante.Aplicacao.DTO;
using CedroRestaurante.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Aplicacao
{
    public class MappingEntidade : Profile
    {
        public MappingEntidade()
        {
            CreateMap<Restaurante, RestauranteDTO>();
            CreateMap<RestauranteDTO, Restaurante>();

            CreateMap<Prato, PratoDTO>();
            CreateMap<PratoDTO, Prato>();
        }
    }
}
