using CedroRestaurante.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CedroRestaurante.Infra.Data.Mapeamentos
{
    public class PratoMap : MapBase<Prato>
    {
        public override void Configure(EntityTypeBuilder<Prato> builder)
        {
            base.Configure(builder);
            builder.ToTable("prato");
            builder.Property(c => c.Nome).IsRequired().HasColumnName("Nome").HasMaxLength(100);
            builder.Property(c => c.Preco).IsRequired().HasColumnName("Preco");
            builder.Property(c => c.RestauranteId).IsRequired().HasColumnName("ResturanteId");

            //Restaurante
            builder.HasOne(x => x.Restaurante)
                   .WithMany(x => x.Pratos)
                   .HasForeignKey(x => x.RestauranteId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
