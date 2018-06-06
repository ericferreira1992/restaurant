using CedroRestaurante.Aplicacao.Interfaces;
using CedroRestaurante.Aplicacao.Servicos;
using CedroRestaurante.Dominio.Interfaces.Repositorios;
using CedroRestaurante.Dominio.Interfaces.Servicos;
using CedroRestaurante.Dominio.Servicos;
using CedroRestaurante.Infra.Data.Repositorios;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CedroRestaurante.Infra.IoC
{
    public class InjetorDependencias
    {
        public static void Registrar(IServiceCollection svcCollection)
        {
            //Aplicação
            svcCollection.AddScoped(typeof(IAppBase<,>), typeof(ServicoAppBase<,>));
            svcCollection.AddScoped<IRestauranteApp, RestauranteApp>();
            svcCollection.AddScoped<IPratoApp, PratoApp>();

            //Domínio
            svcCollection.AddScoped(typeof(IServicoBase<>), typeof(ServicoBase<>));
            svcCollection.AddScoped<IRestauranteServico, RestauranteServico>();
            svcCollection.AddScoped<IPratoServico, PratoServico>();

            //Repositorio
            svcCollection.AddScoped(typeof(IRepositorioBase<>), typeof(RepositorioBase<>));
            svcCollection.AddScoped<IRestauranteRepositorio, RestauranteRepositorio>();
            svcCollection.AddScoped<IPratoRepositorio, PratoRepositorio>();
        }
    }
}
