# Mulasa Soft. test

## Description
This sample project is managing gateways - master devices that control multiple peripheral devices. 

## Technologies-Frameworks
- .netCore 5
  - Entity Framework
- Angular 13
  - Angular Material
  - NgRx (Peripheral Module)
  - Effects


## Installation
Inside Gateway_Backend folder 
 - Provide user and password for database connection
 			
		├── Gateway_Backend
			├── GateWays.Api
				├── appsettings.json 
				
 - dotnet buid
 - dotnet ef database update --project GateWays.Api
 - dotnet run --project GateWays.Api

 

Inside Gateway_Frontend folder
- npm intsall
- ng serve

Open http://localhost:4200/

## Mulasa Soft. test Requirements
- [x]	Basic UI - recommended or (providing test data for Postman (or other rest client) if you do not have enough time.
-	[x] Meaningful Unit tests.
-	[x] Readme file with installation guides.
-	An automated build.
