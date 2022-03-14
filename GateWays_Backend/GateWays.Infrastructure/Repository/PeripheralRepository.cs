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
    public class PeripheralRepository : RepositoryBase<Peripheral>, IPeripheralRepository
    {
        private readonly DbSet<Peripheral>  peripheral;
        public PeripheralRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            peripheral = repositoryContext.Set<Peripheral>();
        }

        public async Task<Peripheral> FindById(int id)
        {
            return await peripheral.FindAsync(id);
        }
    }
}
