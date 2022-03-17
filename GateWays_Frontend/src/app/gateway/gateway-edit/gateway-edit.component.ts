import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, pipe, Subscription, tap } from 'rxjs';
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
  gatewaySub! : Subscription;

  constructor(private gatewayService: GatewayService,
              private peripheralService: PeripheralService,
              private activeRoute: ActivatedRoute) { }

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
            this.title = "Edit Gateway";
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
    let name= "";
    let ipv4 = "";
    //let peripherals!: Peripheral[];

    if(this.editMode){
      id = this.gatewayP.id;
      name = this.gatewayP.name;
      ipv4 = this.gatewayP.ipv4;
      //peripherals = this.gatewayP.peripherals;
    }

    this.gatewayForm = new FormGroup({
      'id': new FormControl(id,Validators.required),
      'name': new FormControl(name,Validators.required),
      'ipv4': new FormControl(ipv4,[Validators.required,Validators.pattern(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)]),
    });

    console.log(this.gatewayForm);
  }

  onSubmit(){
    if(this.editMode){
     // this.recipeServices.updateRecipe(this.pos,this.recipeForm.value);
     // this.LoadPeripherals();
    }else{
      this.gatewayService.addGateway(this.gatewayForm.value).subscribe(
        {
          next: (data) => {
            this.gatewayP = data as GatewayP;
            this.editMode = true;
            this.title = "Edit Gateway";
            this.LoadPeripherals();
            console.log(this.gatewayForm.value);

          },
          error: (e) => this.localErrorManager(e),
           
       }
      );


      
      
    }

  }

  LoadPeripherals(id?:string){

    if(!id){
      this.peripheralService.getPeripheral().subscribe(
        (response) => {
          this.peripherals = response as Peripheral[];
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

  Cancel(){}

  private localErrorManager(error: any){
    console.log(error);
    if(error.status == 420){
      let businessException = error.error as BusinessException;
      
      switch(businessException.StatusCode){
        case 100:{
          this.gatewayForm.controls['id'].setErrors({'incorrect': true});
          
        }
      }
    }

  }

}


