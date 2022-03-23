import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gateway, GatewayP } from '../gateway/gateway-model';
import { Peripheral } from '../peripheral/peripheral-model';
import { HttpRepositoryService } from './http-repository.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

public changelist= new Subject<string>();

  constructor(private http: HttpRepositoryService,
    private router: Router) { }

  getGateways(){
    return this.http.getData(environment.GETALLGATEWAY_URL).pipe(
      tap(()=>{
        console.log("Get All GAteways");
      }),
      catchError(this.CatchError)
      
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
        console.log("CREATE Gateway")
      }));  
  }

  updateGateway(id:string, gt: Gateway){
    return this.http.updateById(environment.UPDATEGATEWAY_URL,id,gt).pipe(
      tap(()=>{
        console.log("Update Gateway")
      })
    );
  }

  updatePeripheralList(id:string,peripherals:Peripheral[]){
    return this.http.updateById(environment.UPDATEPERIPHERALLIST_URL,id,peripherals).pipe(
      tap(()=>{
        console.log("Update Gateway's Periphelal list")
      })
    );
  }

  deleteGateway(id: string){
    return this.http.deleteById(environment.DELETEGATEWAY_URL,id).pipe(
      tap(()=>{
        console.log("Delete Gateway")
      })
    );
  }

  private CatchError (error: HttpErrorResponse){
    console.log("Catch ERROR in a Gateway Service");
    console.log(error);
    if(error.status == 404){  
      this.router.navigateByUrl("/gateway");   
      //return of(error);
    }
        
      return throwError(()=> {throw new Error(error.message)});
  }

}
