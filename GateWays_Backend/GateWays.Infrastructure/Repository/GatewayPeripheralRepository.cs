using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Data;
using System.Threading.Tasks;

namespace GateWays.Infrastructure.Repository
{
    public  class GatewayPeripheralRepository : RepositoryBase<GatewayPeripheral>, IGatewayPeripheralRepository
    {
        public GatewayPeripheralRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {

        }

        public Task<Peripheral> GetPeripheralByGateway(string idgateway)
        {
            throw new System.NotImplementedException();
        }
    }
}
