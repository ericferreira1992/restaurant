using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Storage;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using CedroRestaurante.Dominio.Entidades;

namespace CedroRestaurante.Infra.Data.Interfaces
{
    public interface IContexto : IDisposable
    {
        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
        DbSet<TEntity> Set<TEntity>() where TEntity : class;

        void SendChanges();
        IDbContextTransaction InitTransacao();
    }
}
