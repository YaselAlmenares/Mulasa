import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, pipe, Subscription, tap } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { GatewayService } from 'src/app/services/gateway.service';
import { PeripheralService } from 'src/app/services/peripheral.service';
import { BusinessException } from 'src/app/shared/error-interface';
import {Peripheral} from '../../peripheral/peripheral-model';
import { GatewayP } from '../gateway-model';

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.css']
})
export class GatewayEditComponent implements OnInit {

  gatewayForm!: FormGroup;
  editMode = false;
  gatewayP!:GatewayP;
  title = "";
  peripherals!:Peripheral[];
  peripheralsG!:Peripheral[];
  gatewaySub! : Subscription;
  isLoading=false;
  updateListflag=false;


  constructor(private gatewayService: GatewayService,
              private peripheralService: PeripheralService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private errorhandleService : ErrorHandlerService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((params: Params)=>{
      if (params['id'] != null){
        let id = params['id'];
        console.log(id);
        this.editMode = true;
        this.gatewaySub = this.gatewayService.getGatewayDetails(id).subscribe(
          (response)=>{
            this.gatewayP = response as GatewayP
            console.log(response);
            this.initForm();
            this.LoadPeripherals(id);
            this.peripheralsG = Array.from(this.gatewayP.peripherals);
            this.title = "Edit Gateway";
            console.log(this.gatewayP.peripherals);
          }
        );
      }
      else{
        this.initForm();
        this.title = "Create Gateway";
      }
      });

    //LAST LINES
    
  }

  initForm(){

    let id = "";
    let disableflag = false;
    let name= "";
    let ipv4 = "";
    //let peripherals!: Peripheral[];

    if(this.editMode){
      id = this.gatewayP.id;
      name = this.gatewayP.name;
      ipv4 = this.gatewayP.ipv4;
      disableflag=false;
      //peripherals = this.gatewayP.peripherals;
    }

    this.gatewayForm = new FormGroup({
      'id': new FormControl({value:id,disabled:disableflag},Validators.required),
      'name': new FormControl(name,Validators.required),
      'ipv4': new FormControl(ipv4,[Validators.required,this.checkIpv4]),
    });

    //Validators.pattern(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)

    console.log(this.gatewayForm);
  }

  onSubmit(){
    if(this.editMode){
      console.log(this.gatewayForm.value);
      this.gatewayService.updateGateway(this.gatewayP.id,this.gatewayForm.value).subscribe({
        next: (data) =>{
          this.gatewayP = data as GatewayP;
        },
        error:(e)=>this.localErrorManager(e),
      });

    }else{
      this.gatewayService.addGateway(this.gatewayForm.value).subscribe(
        {
          next: (data) => {
            this.gatewayP = data as GatewayP;
            this.editMode = true;
            this.title = "Edit Gateway";
            this.LoadPeripherals(this.gatewayP.id);
            this.peripheralsG=[];
            console.log(this.gatewayForm.value);

          },
          error: (e) => this.localErrorManager(e),
           
       }
      );     
    }
  }

  updatePeripherals(){

    console.log(this.peripheralsG);

    this.gatewayService.updatePeripheralList(this.gatewayP.id,this.peripheralsG).subscribe({
      next:(data)=>{
        this.updateListflag=false;
        console.log(data);
      },
      error:(e) =>  this.localErrorManager(e),
    });

  }

  LoadPeripherals(id?:string){

    if(!id){
      this.peripheralService.getPeripheral().subscribe(
        (response) => {
          this.peripheralsG = response as Peripheral[];
        }
      );
    }else{
      this.gatewayService.getPeripheralNotInByGateway(id).subscribe(
        (response) => {
          this.peripherals = response as Peripheral[];
        }
      );
    }
  }

  Cancel(){
    this.router.navigate(['gateway'])
  }

  private localErrorManager(error: any){
    console.log(error);
    if(error.status == 420){
      let businessException = error.error as BusinessException;
      
      switch(businessException.StatusCode){
        case 100:{
          this.gatewayForm.controls['id'].setErrors({'incorrect': true});
          this.errorhandleService.errorMessage.next(businessException.Message);
        }
      }
    }

  }

  checkIpv4(control: FormControl){
    let pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    let value:string = control.value;

    if(!pattern.test(value)){
      return {'format':true};
    }
    
    let iparray = value.split(".");
    for(let val of iparray){
  if(Number.parseInt(val)  >= 255)
  {
    return  {'format':true};
  }
}
    return null;

  }

  drop(event: CdkDragDrop<Peripheral[]>) {
    this.updateListflag=true;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    /*if(this.peripheralsG.slice == this.gatewayP.peripherals.slice){
      this.updateListflag = true;
    }else{
      this.updateListflag = false;
    }

    console.log(this.peripheralsG);
    console.log(this.gatewayP.peripherals);*/

    
  }
   


}


