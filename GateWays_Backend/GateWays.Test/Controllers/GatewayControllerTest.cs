using AutoMapper;
using GateWays.Api.Controllers;
using GateWays.Core.Interfaces;
using GateWays.Test.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using GateWays.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using GateWays.Infrastructure.Mapping;
using Moq;
using GateWays.Core.DTOs;
using GateWays.Api.CustomException;

namespace GateWays.Test.Controllers
{

    public class GatewayControllerTest
    {
        private readonly GatewayController _controller;
        private readonly IWrapperRepository _wrapperRepository;
        private readonly IMapper _mapper;


        public GatewayControllerTest()
        {
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new GateWaysProfile());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            _mapper = mapper;
 
            _wrapperRepository = new WrapperRepositoryTest();
            _controller = new GatewayController(_wrapperRepository, _mapper);
            
        }

        [Fact]
        public void GetAllGateways()
        {
            // Act
            var okResult = _controller.GetAll().Result as OkObjectResult;
            // Assert
            
            var items = Assert.IsType<List<GatewayDto>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }

        [Fact]
        public void GetById_Ok()
        {
            var id = "1";
            // Act
            var okResult = _controller.GetById(id) as OkObjectResult;
            // Assert

            var items = Assert.IsType<GatewayDetailsDto>(okResult.Value);
            Assert.Equal(id, items.Id);
        }

        [Fact]
        public void GetById_NoFound()
        {
            var id = "10";
            // Act
            var okResult = _controller.GetById(id);
            // Assert

            Assert.IsType<NotFoundResult>(okResult);
            
        }

        [Fact]
        public void Delete_Id_NoFound()
        {
            var id = "10";
            // Act
            var okResult = _controller.Delete(id).Result;
            // Assert

            Assert.IsType<NotFoundResult>(okResult);

        }

        [Fact]
        public void Delete_Id_Ok()
        {
            var id = "1";
            // Act
            var okResult = _controller.Delete(id).Result;
            // Assert

            Assert.IsType<OkResult>(okResult);

        }

        [Fact]
        public void Create_Ok()
        {
            var gateway = new GatewayDto() { Id = "4", Name = "GAteway4", Ipv4 = "10.10.10.14" };
            // Act
            var okResult = _controller.Create(gateway).Result as OkObjectResult;
            // Assert

            var items = Assert.IsType<GatewayDto>(okResult.Value);
            Assert.Equal(gateway.Id, items.Id);

        }

        [Fact]
        public void Create_Exist()
        {
            var gateway = new GatewayDto() { Id = "1", Name = "GAteway4", Ipv4 = "10.10.10.14" };
            // Act
            var okResult = _controller.Create(gateway);

            string exception = okResult.Exception.Message;
            // Assert

            //Assert.IsType<BusinessException>(okResult);
            Assert.Equal("One or more errors occurred. (Serial number exist)", exception);

        }








    }
}
