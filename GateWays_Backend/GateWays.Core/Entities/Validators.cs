
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace GateWays.Core.Entities
{
    public class IPv4Address: ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            Regex ip = new Regex(@"^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$");

            string strValue = value as string;

            return ip.IsMatch(strValue); ;
        }

    }

    public class State : ValidationAttribute
    {

        public override bool IsValid(object value)
        {

            string strValue = value as string;

            return strValue.Equals("online") || strValue.Equals("offline");

        }
    }


    }
