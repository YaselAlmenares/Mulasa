using GateWays.Core.Interfaces;
using GateWays.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace GateWays.Infrastructure.Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {

        protected RepositoryContext RepositoryContext { get; set; }

        public RepositoryBase(RepositoryContext repositoryContext)
        {
            this.RepositoryContext = repositoryContext;
        }

        public void Create(T entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));
            this.RepositoryContext.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));
            this.RepositoryContext.Set<T>().Remove(entity);
        }

        public async Task<IEnumerable<T>> FindAll()
        {
            return await this.RepositoryContext.Set<T>().ToListAsync();
        }

        public async Task<IEnumerable<T>> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return await this.RepositoryContext.Set<T>().Where(expression).ToListAsync();
        }

        public void Update(T entity)
        {
            this.RepositoryContext.Set<T>().Update(entity);
        }

        public async Task<T> FirstAsync(Expression<Func<T, bool>> expression)
        {
            return await this.RepositoryContext.Set<T>().Where(expression).FirstOrDefaultAsync();
        }
    }
}
