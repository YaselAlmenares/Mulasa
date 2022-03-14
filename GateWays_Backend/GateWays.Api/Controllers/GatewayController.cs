using AutoMapper;
using GateWays.Api.CustomException;
using GateWays.Core.DTOs;
using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GateWays.Api.Controllers
{

    [Route("gateway/[controller]/[action]")]
    [ApiController]
    public class GatewayController : ControllerBase
    {
        private readonly IWrapperRepository _repository;
        private readonly IMapper _mapper;

        public GatewayController(IWrapperRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var gateways = await _repository.Gateway.FindAll();
            var gatewaysDto = _mapper.Map<IEnumerable<GatewayDto>>(gateways);

            //var gatewayPeripherals = await _repository.GatewayPeripheral<gatewayPeripherals>
           
     
            return Ok(gatewaysDto);
            //return Ok(ings);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var gateway = await _repository.Gateway.FindById(id);

            if(gateway == null)
                return NotFound();
           

            var peripherals = await _repository.Peripheral.FindByCondition(p => p.Gateways.Contains(gateway));

            var gatewaydto = _mapper.Map<GatewayDetailsDto>(gateway);

            if(peripherals!=null)
                gatewaydto.Peripheras = (List<PeripheralDto>)_mapper.Map<ICollection<PeripheralDto>>(peripherals);

            return Ok(gatewaydto);
        
        }

        [HttpGet]
        public async Task<IActionResult> PeripheralsNotInGateway(string id)
        {
            var gateway = await _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();

            var peripherals = _repository.Peripheral.FindByCondition(p=>!p.Gateways.Contains(gateway));


            var peripheralsDto = _mapper.Map<ICollection<PeripheralDto>>(peripherals.Result);

            return Ok(peripheralsDto);

        }




        [HttpPost]
        public async Task<IActionResult> Post([FromBody] GatewayDto gatewayDto)
        {
            var newgateway = _mapper.Map<Gateway>(gatewayDto);
            var gateway = await _repository.Gateway.FindById(newgateway.Id);

            if (gateway != null)
            {
                //throw new BusinessException("InsertPost","User do not exist", _mapper)

                 throw new BusinessException(100,"Serial number exist");
            }

            _repository.Gateway.Create(newgateway);

            await _repository.Save();

            gatewayDto = _mapper.Map<GatewayDto>(newgateway);

            return Ok(gatewayDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGw(string id, [FromBody] GatewayUpdateDto gatewayUpdate)
        {
            var gateway = await _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();

            _mapper.Map(gatewayUpdate, gateway);
            _repository.Gateway.Update(gateway);

            var gatewayDto = _mapper.Map<GatewayDto>(gateway);

            await _repository.Save();

            return Ok(gatewayDto);
        }


       /* [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePeripheral(string id, ICollection<int> ids)
        {
          /*  var gateway = await _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();

            var peripherals = await _repository.Peripheral.FindByCondition
            if (gateway == null)
                return NotFound();

            _mapper.Map(gatewayDto, gateway);
            _repository.Gateway.Update(gateway);

            await _repository.Save();*/

            //return Ok();
        //}




    }
}
