using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Test.Services
{
    public class PeripheralRepositoryTest : IRepositoryBase<Peripheral>, IPeripheralRepository
    {
        private readonly List<Peripheral> _peripheral;


        public PeripheralRepositoryTest()
        {
            throw new NotImplementedException();
        }
        void IRepositoryBase<Peripheral>.Create(Peripheral entity)
        {
            throw new NotImplementedException();
        }

        void IRepositoryBase<Peripheral>.Delete(Peripheral entity)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<Peripheral>> IRepositoryBase<Peripheral>.FindAll()
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<Peripheral>> IRepositoryBase<Peripheral>.FindByCondition(Expression<Func<Peripheral, bool>> expression)
        {
            throw new NotImplementedException();
        }

        Task<Peripheral> IPeripheralRepository.FindById(int id)
        {
            throw new NotImplementedException();
        }

        Task<Peripheral> IRepositoryBase<Peripheral>.FirstAsync(Expression<Func<Peripheral, bool>> expression)
        {
            throw new NotImplementedException();
        }

        Peripheral IRepositoryBase<Peripheral>.GetFirstElement(Expression<Func<Peripheral, bool>> expression)
        {
            throw new NotImplementedException();
        }

        void IRepositoryBase<Peripheral>.Update(Peripheral entity)
        {
            throw new NotImplementedException();
        }
    }
}
