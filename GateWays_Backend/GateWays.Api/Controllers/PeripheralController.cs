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
    [Route("gateway/[controller]")]
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
        public async Task<IActionResult> Get()
        {
            var peripheral = await _repository.Peripheral.FindAll();
            var peripheralsDto = _mapper.Map<IEnumerable<PeripheralDto>>(peripheral);

            return Ok(peripheralsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var peripheral = await _repository.Peripheral.FindById(id);

            if (peripheral == null)
                return NotFound();


            var peripheralDto = _mapper.Map<PeripheralDto>(peripheral);

            return Ok(peripheralDto);

        }

        

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PeripheralDto peripheralDto)
        {
            var newperipheral = _mapper.Map<Peripheral>(peripheralDto);
            var peripheral = await _repository.Peripheral.FindById(newperipheral.Id);

            if (peripheral != null)
            {
                //throw new BusinessException("InsertPost","User do not exist", _mapper)

                throw new BusinessException(100, "Serial number exist");
            }

            _repository.Peripheral.Create(newperipheral);

            await _repository.Save();

            return Ok(peripheralDto);
        }
    }
}
