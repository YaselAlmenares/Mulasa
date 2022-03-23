using AutoMapper;
using GateWays.Api.CustomException;
using GateWays.Core.DTOs;
using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using Microsoft.AspNetCore.JsonPatch;
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
        public async Task<IActionResult> GetAll()
        {
            var gateways = await _repository.Gateway.FindAll();
            var gatewaysDto = _mapper.Map<IEnumerable<GatewayDto>>(gateways);

            //var gatewayPeripherals = await _repository.GatewayPeripheral<gatewayPeripherals>
           
     
            return Ok(gatewaysDto);
            //return Ok(ings);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {
            var gateway =  _repository.Gateway.FindById(id);

            if(gateway == null)
                return NotFound();
           

           var result = _mapper.Map<GatewayDetailsDto>(gateway);

            

            return Ok(result);
        
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> PeripheralsNotInGateway(string id)
        {
            var gateway = await _repository.Gateway.FindByIdAsync(id);

            if (gateway == null)
                return NotFound();

            var peripherals = _repository.Peripheral.FindByCondition(p=>!p.Gateways.Contains(gateway));


            var peripheralsDto = _mapper.Map<ICollection<PeripheralDto>>(peripherals.Result);

            return Ok(peripheralsDto);

        }

        [HttpGet]
        public async Task<IActionResult> PeripheralsInGateway(string id)
        {
            var gateway =  _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();


            var peripheralsDto = _mapper.Map<ICollection<PeripheralDto>>(gateway.Peripherals);

            return Ok(peripheralsDto);

        }




        [HttpPost]
        public async Task<IActionResult> Create([FromBody] GatewayDto gatewayDto)
        {
            var newgateway = _mapper.Map<Gateway>(gatewayDto);
            var gateway =  await _repository.Gateway.FindByIdAsync(newgateway.Id);

            if (gateway != null)
            {

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
            var gateway =  await _repository.Gateway.FindByIdAsync(id);

            if (gateway == null)
                return NotFound();

            _mapper.Map(gatewayUpdate, gateway);
            _repository.Gateway.Update(gateway);

            var gatewayDto = _mapper.Map<GatewayDto>(gateway);

            await _repository.Save();

            return Ok(gatewayDto);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePeripherals(string id, ICollection<PeripheralDto> peripheralsdto)
        {
            if(peripheralsdto.Count > 10)
            {
                throw new  BusinessException(101, "The Gateway can has up to 10 peripherals");
            }
            var gateway =  _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();

            var peripheral = _mapper.Map<ICollection<Peripheral>>(peripheralsdto);


            _repository.Gateway.UpdatePeripheralList(id, peripheral);

            var result =  _mapper.Map<ICollection<PeripheralDto>> (gateway.Peripherals);

            return Ok(result);
        }


        [HttpPatch("{id}")]
        public ActionResult UpdateGw1(string id, JsonPatchDocument<GatewayUpdateDto> pathDocument)
        {

            var gateway = _repository.Gateway.GetFirstElement(g => g.Id == id);
            if (gateway == null)
                return NotFound();

            var gatewayToPatch = _mapper.Map<GatewayUpdateDto>(gateway);
            pathDocument.ApplyTo(gatewayToPatch, ModelState);

            if (!TryValidateModel(gatewayToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(gatewayToPatch, gateway);
            _repository.Gateway.Update(gateway);
            _repository.Save();

            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var gateway =   _repository.Gateway.FindById(id);

            if (gateway == null)
                return NotFound();

            _repository.Gateway.Delete(gateway);

            await _repository.Save();

            return Ok();
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
