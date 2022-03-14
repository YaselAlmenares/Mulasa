using GateWays.Core.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace GateWays.Core.DTOs
{
    public class PeripheralDto
    {
        

        [Required(ErrorMessage = "vendor is required")]
        public string Vendor { get; set; }

        public DateTime Date { get; set; }
        [Required(ErrorMessage = "State is required")]
        [State]
        public string State { get; set; }
    }
}
