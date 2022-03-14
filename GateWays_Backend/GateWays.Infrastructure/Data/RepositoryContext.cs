using GateWays.Core.Entities;
using Microsoft.EntityFrameworkCore;


namespace GateWays.Infrastructure.Data
{
    public  class RepositoryContext:DbContext
    {
        public DbSet<Gateway> gateways { get; set; }

        public DbSet<Peripheral> peripherals { get; set; }

        //public DbSet<GatewayPeripheral> gatewayPeripherals { get; set; }


        public RepositoryContext(DbContextOptions options)
           : base(options)
        {
        }


       /* protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GatewayPeripheral>()
                .HasKey(gp => new { gp.GatewayId, gp.PeripheralId });

            modelBuilder.Entity<GatewayPeripheral>()
                .HasOne(gp => gp.Gateway)
                .WithMany(p => p.Peripherals)
                .HasForeignKey(gp => gp.GatewayId);
            modelBuilder.Entity<GatewayPeripheral>()
                .HasOne(gp => gp.Peripheral)
                .WithMany(p => p.Gateways)
                .HasForeignKey(bc => bc.PeripheralId);
                
                
        }*/





    }
}
