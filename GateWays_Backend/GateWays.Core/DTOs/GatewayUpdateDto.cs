using GateWays.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace GateWays.Core.DTOs
{
    public class GatewayUpdateDto
    {
       

        public string Name { get; set; }

        [IPv4Address]
        public string Ipv4 { get; set; }

       
    }
}
