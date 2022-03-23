using GateWays.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IGatewayRepository : IRepositoryBase<Gateway>
    {
        Gateway FindById(string id);

        Task<Gateway> FindByIdAsync(string id);

        Gateway UpdatePeripheralList(string id, ICollection<Peripheral> peripheral);
    }

    


}
