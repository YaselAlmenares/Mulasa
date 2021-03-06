import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpRepositoryService {

  constructor(private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  public getData = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.API_URL));
  }

  public getDataById = (route: string,id:any) => {
    return this.http.get(this.createCompleteRoute(route+"/"+id, environment.API_URL));
    
    //.pipe(catchError(this.CatchError));
  }
 
  public create = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, environment.API_URL), body, this.generateHeaders());
  }
 
  public update = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, environment.API_URL), body, this.generateHeaders());
  }

  public updateById = (route: string,id:any, body: any) => {
    return this.http.put(this.createCompleteRoute(route+"/"+id, environment.API_URL), body, this.generateHeaders());
  }

  public updateById_1 = (route: string,id:any, body: any) => {
    return this.http.patch(this.createCompleteRoute(route+"/"+id, environment.API_URL), body, this.generateHeaders());
  }
 
  public deleteById = (route: string,id:any) => {
    return this.http.delete(this.createCompleteRoute(route+"/"+id, environment.API_URL));
  }
 
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

 
  private generateHeaders = () => {

    //ACA se puede adicionar tambien el token de autorizacion

    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return {
      headers: headers
    }
  }

  private CatchError (error: HttpErrorResponse){
    console.log("Catch ERROR in a Service");
    console.log(error);
    if(error.status == 404){
      //this.router.navigateByUrl("/gateway");
      //return of(error);
    }
        
      return throwError(()=> {throw new Error(error.message)});
  }

}
