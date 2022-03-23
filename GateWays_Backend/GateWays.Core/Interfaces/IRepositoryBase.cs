using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Interfaces
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<IEnumerable<T>> FindAll();
        Task<IEnumerable<T>> FindByCondition(Expression<Func<T, bool>> expression);

        //PagedList<T> FindAll_Paged(QueryStringParameters stringParameters);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);

        Task<T> FirstAsync(Expression<Func<T, bool>> expression);

        T GetFirstElement(Expression<Func<T, bool>> expression);
    }
}
