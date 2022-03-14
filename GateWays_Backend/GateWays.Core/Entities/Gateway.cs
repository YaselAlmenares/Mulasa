using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Entities
{

    [Table("gateway")]
    public class Gateway
    {
        
        [Required(ErrorMessage = "Serial Number is required")]
        public string Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }


        [Required(ErrorMessage = "Ipv4 is required")]
        [IPv4Address]
        public string Ipv4 { get; set; }

        public virtual ICollection<Peripheral> Peripherals { get; set; }



    }
}
