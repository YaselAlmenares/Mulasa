using GateWays.Core.Entities;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IGatewayPeripheralRepository : IRepositoryBase<GatewayPeripheral>
    {
        Task<Peripheral> GetPeripheralByGateway(string idgateway);
    }
}
