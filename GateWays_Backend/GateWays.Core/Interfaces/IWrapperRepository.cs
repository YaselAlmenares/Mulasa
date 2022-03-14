using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IWrapperRepository
    {
        IGatewayRepository Gateway { get; }

        IPeripheralRepository Peripheral { get; }

        //IGatewayPeripheralRepository  GatewayPeripheral { get; }

        Task Save();
    }
}
