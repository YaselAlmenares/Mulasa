using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Entities
{
    [Table("gatewayperipheral")]
    public  class GatewayPeripheral
    {
        [Key, Column(Order =1)]
        public string GatewayId { get; set; }

        [Key, Column(Order = 2)]
        public int PeripheralId { get; set; }

        public Gateway Gateway { get; set; }

        public Peripheral Peripheral { get; set; }  
    }
}
