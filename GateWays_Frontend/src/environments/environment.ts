// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://localhost:5001/gateway',
  GETALLGATEWAY_URL: 'gateway/getall',
  GETGATEWAYBYID_URL: 'gateway/getbyid',
  CREATEGATEWAY_URL: 'gateway/create',
  PERIPHERAL_GATEWAY_URL:'Gateway/PeripheralsInGateway',
  PERIPHERAL_NOTIN_GATEWAY_URL:'Gateway/PeripheralsNotInGateway',
  UPDATEGATEWAY_URL: 'gateway/updategw',
  UPDATEPERIPHERALLIST_URL: 'gateway/UpdatePeripherals',
  DELETEGATEWAY_URL: 'gateway/delete',

  PERIPHERAL_URL:'peripheral',
  GETALLPERIPHERAL_URL: 'peripheral/getall',
  CREATEPERIPHERAL_URL: 'peripheral/create',
  DELETEPERIPHERAL_URL: 'peripheral/delete',
  GETPERIPHERALBYID_URL: 'peripheral/getbyid',
  UPDATEPERIPHERAL_URL: 'peripheral/UpdatePeripheral',
  


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
