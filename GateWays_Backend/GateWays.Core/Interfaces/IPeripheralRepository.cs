using GateWays.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IPeripheralRepository : IRepositoryBase<Peripheral>
    {
        Task<Peripheral> FindById(int id);
    }
}
