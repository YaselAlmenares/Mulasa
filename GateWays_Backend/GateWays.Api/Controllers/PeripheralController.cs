using AutoMapper;
using GateWays.Api.CustomException;
using GateWays.Core.DTOs;
using GateWays.Core.Entities;
using GateWays.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace GateWays.Api.Controllers
{
    [Route("gateway/[controller]/[action]")]
    [ApiController]
    public class PeripheralController : ControllerBase
    {

        private readonly IWrapperRepository _repository;
        private readonly IMapper _mapper;

        public PeripheralController(IWrapperRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var peripheral = await _repository.Peripheral.FindAll();
            var peripheralsDto = _mapper.Map<IEnumerable<PeripheralDto>>(peripheral);

            return Ok(peripheralsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var peripheral = await _repository.Peripheral.FindById(id);

            if (peripheral == null)
                return NotFound();


            var peripheralDto = _mapper.Map<PeripheralDto>(peripheral);

            return Ok(peripheralDto);

        }

        

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PeripheralCreateDto peripheralDto)
        {
            var newperipheral = _mapper.Map<Peripheral>(peripheralDto);

            _repository.Peripheral.Create(newperipheral);

            await _repository.Save();

            var result = _mapper.Map<PeripheralDto>(newperipheral);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePeripheral(int id, [FromBody] PeripheralCreateDto peripheralUpdate)
        {
            var peripheral = await _repository.Peripheral.FindById(id);

            if (peripheral == null)
                return NotFound();

            _mapper.Map(peripheralUpdate, peripheral);
            _repository.Peripheral.Update(peripheral);

            var peripheralDto = _mapper.Map<PeripheralDto>(peripheral);

            await _repository.Save();

            return Ok(peripheralDto);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var peripheral = await _repository.Peripheral.FindById(id);

            if (peripheral == null)
                return NotFound();

            
            var gateways =   await _repository.Gateway.FindByCondition(g=>g.Peripherals.Contains(peripheral));

            if (gateways.Count()!=0)
            {
                throw new BusinessException(200, "This peripheral belongs to a Gateway");
            }

            _repository.Peripheral.Delete(peripheral);

            await _repository.Save();

            return Ok();
        }
    }
}
