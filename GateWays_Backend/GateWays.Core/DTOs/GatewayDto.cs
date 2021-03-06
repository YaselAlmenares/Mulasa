using GateWays.Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace GateWays.Core.DTOs
{
    public class GatewayDto
    {
        [Required(ErrorMessage = "Serial Number is required")]
        public string Id { get; set; }


        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Ipv4 is required")]
        [IPv4Address]
        public string Ipv4 { get; set; }

       
    }
}
