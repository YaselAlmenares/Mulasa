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
        public GatewayRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            gateway = repositoryContext.Set<Gateway>();
        }

        public async Task<Gateway> FindById(string id)
        {
            return await gateway.FindAsync(id);
        }
    }
}
