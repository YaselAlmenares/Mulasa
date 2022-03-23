using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Data;
using GateWays.Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Test.Services
{
    internal class GatewayRepositoryTest : IRepositoryBase<Gateway>, IGatewayRepository
    {
        private readonly List<Gateway> _gatewayList;
        public GatewayRepositoryTest()
        {
            _gatewayList = new List<Gateway>()
            {
                new Gateway(){Id="1",Name="GAteway1",Ipv4="10.10.10.11"},
                new Gateway(){Id="2",Name="GAteway2",Ipv4="10.10.10.12"},
                new Gateway(){Id="3",Name="GAteway3",Ipv4="10.10.10.13"}
            };
        }

        public void Create(Gateway entity)
        {
            _gatewayList.Add(entity);
        }

        public void Delete(Gateway entity)
        {
            _gatewayList.Remove(entity);
        }

        public async Task<IEnumerable<Gateway>> FindAll()
        {
            return await Task.FromResult(_gatewayList);
        }

        public async Task<IEnumerable<Gateway>> FindByCondition(Expression<Func<Gateway, bool>> expression)
        {


            /*_gatewayList.Where(expression);
            return await Task.FromResult(list.   Where(expression));*/
            throw new NotImplementedException();
        }

        public Task<Gateway> FindByIdAsync(string id)
        {
           var result = _gatewayList.FirstOrDefault(g=>g.Id==id);

            return Task.FromResult<Gateway>(result);

        }

        public Task<Gateway> FirstAsync(Expression<Func<Gateway, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public Gateway GetFirstElement(Expression<Func<Gateway, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public void Update(Gateway entity)
        {
            throw new NotImplementedException();
        }

         Gateway IGatewayRepository.FindById(string id)
        {
            return _gatewayList.FirstOrDefault(x => x.Id == id);  
        }

        Gateway IGatewayRepository.UpdatePeripheralList(string id, ICollection<Peripheral> peripheral)
        {
            throw new NotImplementedException();
        }
    }
}
