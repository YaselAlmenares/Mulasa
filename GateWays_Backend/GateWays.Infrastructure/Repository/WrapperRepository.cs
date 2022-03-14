using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Data;
using System.Threading.Tasks;

namespace GateWays.Infrastructure.Repository
{
    public class WrapperRepository : IWrapperRepository
    {
        private RepositoryContext _repoContext;

        private IGatewayRepository _gateway;

        private IPeripheralRepository _peripheral;

        private IGatewayPeripheralRepository _gatewayPeripheral;



        public WrapperRepository(RepositoryContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        public IGatewayRepository Gateway
        {

            get
            {
                if (_gateway == null)
                {
                    _gateway = new GatewayRepository(_repoContext);
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
                    _peripheral = new PeripheralRepository(_repoContext);
                }
                return _peripheral;
            }
        }

        public async Task Save()
        {
            await _repoContext.SaveChangesAsync();
        }

        /*public IGatewayPeripheralRepository GatewayPeripheral
        {

            get
            {
                if (_gatewayPeripheral == null)
                {
                    _gatewayPeripheral = new GatewayPeripheralRepository(_repoContext);
                }
                return _gatewayPeripheral;
            }*
        }*/
    }
}
