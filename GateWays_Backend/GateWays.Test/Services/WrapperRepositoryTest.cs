using GateWays.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Test.Services
{
    public class WrapperRepositoryTest : IWrapperRepository
    {
        private IGatewayRepository _gateway;

        private IPeripheralRepository _peripheral;


        public IGatewayRepository Gateway
        {

            get
            {
                if (_gateway == null)
                {
                    _gateway = new GatewayRepositoryTest();
                }
                return _gateway;
            }
        }

        public IPeripheralRepository Peripheral
        {

            get
            {
                if (_peripheral == null)
                {
                    _peripheral = new PeripheralRepositoryTest();
                }
                return _peripheral;
            }
        }

        Task IWrapperRepository.Save()
        {
            return Task.CompletedTask;
        }
    }
}
