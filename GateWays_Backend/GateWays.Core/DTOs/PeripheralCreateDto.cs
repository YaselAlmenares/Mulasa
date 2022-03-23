using GateWays.Core.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace GateWays.Core.DTOs
{
    public class PeripheralCreateDto
    {

        [Required(ErrorMessage = "vendor is required")]
        public string Vendor { get; set; }

        public DateTime CreateDate { get; set; }


        [Required(ErrorMessage = "State is required")]
        [State]
        public string State { get; set; }
    }
}
