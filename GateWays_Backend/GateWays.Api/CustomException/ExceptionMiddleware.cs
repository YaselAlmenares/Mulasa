using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using System.Net;

namespace GateWays.Api.CustomException
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {

            if (exception.GetType() == typeof(BusinessException))
            {
                Console.WriteLine("HEre");
                context.Response.StatusCode = 406;
                var localEx = new BusinessException(100, exception.Message);
                return context.Response.WriteAsync(localEx.ToString());
            }

            //Console.WriteLine("+++++++++++++++++++++++++++++++++++++++++++");
            context.Response.ContentType = "application/json";
            var _ex = new BusinessException((int)HttpStatusCode.InternalServerError, exception.Message);
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            return context.Response.WriteAsync(_ex.ToString());
        }
    }


}
