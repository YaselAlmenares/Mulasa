import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GatewayP } from '../gateway/gateway-model';
import { HttpRepositoryService } from './http-repository.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {



  constructor(private http: HttpRepositoryService) { }

  getGateways(){
    return this.http.getData(environment.GETALLGATEWAY_URL).pipe(
      tap(()=>{
        console.log("Get All GAteways");
      }),
      
    );
  }

  getGatewayDetails(id:string){
    return this.http.getDataById(environment.GETGATEWAYBYID_URL,id).pipe(
      tap(()=>{
        console.log("Get Gateway by Id");
      }),
      
    );
  }

  getPeripheralByGateway(id:string){
    return this.http.getDataById(environment.PERIPHERAL_GATEWAY_URL,id).pipe(
      tap(()=>{
        console.log("Get Peripherals from GatewayId");
      }),
      
    );
  }

  getPeripheralNotInByGateway(id:string){
    return this.http.getDataById(environment.PERIPHERAL_NOTIN_GATEWAY_URL,id).pipe(
      tap(()=>{
        console.log("Get Peripherals from GatewayId");
      }),
      
    );
  }

  addGateway(gt: GatewayP){
    return this.http.create(environment.CREATEGATEWAY_URL,gt).pipe(
      tap(()=>{
        console.log("CREATE Gate")
      }));  
  }

}
