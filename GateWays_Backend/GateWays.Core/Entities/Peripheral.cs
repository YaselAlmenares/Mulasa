using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateWays.Core.Entities
{
    [Table("peripheral")]
    public  class Peripheral
    {
        public Peripheral()
        {
            Gateways = new HashSet<Gateway>();
        }

        [Required(ErrorMessage = "UID is required")]
        public int Id { get; set; }

        [Required(ErrorMessage = "vendor is required")]
        public string Vendor { get; set; }

        public DateTime CreateDate { get; set; }
        [Required(ErrorMessage = "State is required")]
        [State]
        public string State { get; set; }

        public virtual ICollection<Gateway> Gateways { get; set; }

    }
}
