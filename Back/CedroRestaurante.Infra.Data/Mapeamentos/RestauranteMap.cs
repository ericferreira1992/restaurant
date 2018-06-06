using CedroRestaurante.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Infra.Data.Mapeamentos
{
    public class RestauranteMap : MapBase<Restaurante>
    {
        public override void Configure(EntityTypeBuilder<Restaurante> builder)
        {
            base.Configure(builder);
            builder.ToTable("restaurante");
            builder.Property(c => c.Nome).IsRequired().HasColumnName("Nome").HasMaxLength(100);

            //Pratos
            builder.HasMany(x => x.Pratos)
                   .WithOne(x => x.Restaurante)
                   .HasForeignKey(x => x.RestauranteId);
        }
    }
}
