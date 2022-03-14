using Newtonsoft.Json;
using System;

namespace GateWays.Api.CustomException
{
    public class BusinessException : Exception
    {
        public int StatusCode { get; set; }
        //public string Message { get; set; }

        public BusinessException() : base() { }

        public BusinessException(int code, string message):base(message)
        {
            StatusCode = code;
            //Message=message;

        }


        public override string ToString()
        {
            //return JsonConvert.SerializeObject(this);
           return JsonConvert.SerializeObject(this, Formatting.Indented, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
        }
    }
}
