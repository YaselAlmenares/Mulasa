using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Infrastructure.Repository
{
    public class GatewayRepository : RepositoryBase<Gateway>, IGatewayRepository
    {
        private readonly DbSet<Gateway> gateway;
        private RepositoryContext _repositoryContext;
        private readonly DbSet<Peripheral> peripherals;
        public GatewayRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            gateway = repositoryContext.Set<Gateway>();
             peripherals = repositoryContext.Set<Peripheral>();  
            _repositoryContext = repositoryContext;
        }

        public Gateway FindById(string id)
        {
            return  gateway.Include(g=>g.Peripherals).Where(g=>g.Id==id).FirstOrDefault();
        }

        public async Task<Gateway> FindByIdAsync(string id)
        {
            return await gateway.FindAsync(id);
        }

        public Gateway UpdatePeripheralList(string id, ICollection<Peripheral> peripheral)
        {
            var gt = gateway.Include("Peripherals").Single(g => g.Id == id);

            var newP = peripherals.Where(p=>peripheral.Contains(p)).ToList();

            gt.Peripherals.Clear();

            foreach (var p in newP)
                gt.Peripherals.Add(p);

            _repositoryContext.SaveChanges();

            return gt;
        }
    }
}
