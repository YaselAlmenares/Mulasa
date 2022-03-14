using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GateWays.Api.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "gateway",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ipv4 = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gateway", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "peripheral",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Vendor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_peripheral", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GatewayPeripheral",
                columns: table => new
                {
                    GatewaysId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PeripheralsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GatewayPeripheral", x => new { x.GatewaysId, x.PeripheralsId });
                    table.ForeignKey(
                        name: "FK_GatewayPeripheral_gateway_GatewaysId",
                        column: x => x.GatewaysId,
                        principalTable: "gateway",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GatewayPeripheral_peripheral_PeripheralsId",
                        column: x => x.PeripheralsId,
                        principalTable: "peripheral",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GatewayPeripheral_PeripheralsId",
                table: "GatewayPeripheral",
                column: "PeripheralsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GatewayPeripheral");

            migrationBuilder.DropTable(
                name: "gateway");

            migrationBuilder.DropTable(
                name: "peripheral");
        }
    }
}
