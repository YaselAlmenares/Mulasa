using AutoMapper;
using GateWays.Core.DTOs;
using GateWays.Core.Entities;

namespace GateWays.Infrastructure.Mapping
{
    public class GateWaysProfile:Profile
    {
        public GateWaysProfile()
        {
            CreateMap<Gateway, GatewayDto>();
            CreateMap<GatewayDto, Gateway>();
            CreateMap<Gateway, GatewayDetailsDto> ();
            CreateMap<GatewayDetailsDto, Gateway>();
            CreateMap<Gateway, GatewayUpdateDto>();
            CreateMap<GatewayUpdateDto,Gateway> ();
            CreateMap<Peripheral, PeripheralDto>();
            CreateMap<PeripheralDto, Peripheral>();
        }
    }
}
