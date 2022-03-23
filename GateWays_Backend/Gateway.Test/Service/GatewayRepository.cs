using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Repository;
using Gateways.Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GateWays.Infrastructure.Data;
using GateWays.Core.Entities;
using System.Linq.Expressions;

namespace Gateways.Test.Service
{
    public class GatewayRepository : RepositoryBase<Gateway>, IGatewayRepository
    {
        public GatewayRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
            _gatewayList = new List<Gateway>

        }

        public void Create(GateWays.Core.Entities.Gateway entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(GateWays.Core.Entities.Gateway entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<GateWays.Core.Entities.Gateway>> FindByCondition(Expression<Func<GateWays.Core.Entities.Gateway, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public Task<GateWays.Core.Entities.Gateway> FindById(string id)
        {
            throw new NotImplementedException();
        }

        public Task<GateWays.Core.Entities.Gateway> FirstAsync(Expression<Func<GateWays.Core.Entities.Gateway, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public GateWays.Core.Entities.Gateway GetFirstElement(Expression<Func<GateWays.Core.Entities.Gateway, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public void Update(GateWays.Core.Entities.Gateway entity)
        {
            throw new NotImplementedException();
        }

        public GateWays.Core.Entities.Gateway UpdatePeripheralList(string id, ICollection<Peripheral> peripheral)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<GateWays.Core.Entities.Gateway>> IRepositoryBase<GateWays.Core.Entities.Gateway>.FindAll()
        {
            throw new NotImplementedException();
        }
    }
}
