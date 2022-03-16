import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpRepositoryService } from './http-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PeripheralService {

  constructor(private http: HttpRepositoryService) { }

  getPeripheral(){
    return this.http.getData(environment.GETALLPERIPHERAL_URL).pipe(
      tap(()=>{
        console.log("Get All Peripherals");
      }),
      
    );
  }

  
}
