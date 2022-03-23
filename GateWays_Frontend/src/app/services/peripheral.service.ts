import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peripheral } from '../peripheral/peripheral-model';
import { HttpRepositoryService } from './http-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PeripheralService {

  public changelist= new Subject<string>();
  public editPeripheral= new Subject<number>();

  constructor(private http: HttpRepositoryService) { }

  getPeripheral(){
    return this.http.getData(environment.GETALLPERIPHERAL_URL).pipe(
      tap(()=>{
        console.log("Get All Peripherals");
      }),
      
    );
  }

  addPeripheral(per: Peripheral){
    console.log(per);
    return this.http.create(environment.CREATEPERIPHERAL_URL,per).pipe(
      tap(()=>{
        console.log("CREATE Peripheral");
      }));  
  }

  deletePeripheral(id: number){
    return this.http.deleteById(environment.DELETEPERIPHERAL_URL,id).pipe(
      tap(()=>{
        console.log("Delete Peripheral")
      })
    );
  }

  getPeripheralById(id:number){
    return this.http.getDataById(environment.GETPERIPHERALBYID_URL,id).pipe(
      tap(()=>{
        console.log("Get Peripheral by Id");
      }),
      
    );
  }

  updatePeripheral(id:number, per: Peripheral){
    return this.http.updateById(environment.UPDATEPERIPHERAL_URL,id,per).pipe(
      tap(()=>{
        console.log("Update Peripheral")
      })
    );
  }

  
}
