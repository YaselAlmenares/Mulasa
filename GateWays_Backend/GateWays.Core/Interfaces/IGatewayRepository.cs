using GateWays.Core.Entities;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IGatewayRepository : IRepositoryBase<Gateway>
    {
        Task<Gateway> FindById(string id);
    }


}
