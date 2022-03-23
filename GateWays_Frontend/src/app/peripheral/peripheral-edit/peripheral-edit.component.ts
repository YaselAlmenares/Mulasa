import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeripheralService } from 'src/app/services/peripheral.service';
import { Peripheral } from '../peripheral-model';
import * as AppState from '../../app-store/app.reducers';
import { Store } from '@ngrx/store';
import * as peripheralActions from '../store/peripheral-actions';
import * as moment from 'moment';

@Component({
  selector: 'app-peripheral-edit',
  templateUrl: './peripheral-edit.component.html',
  styleUrls: ['./peripheral-edit.component.css']
})
export class PeripheralEditComponent implements OnInit {

  peripheral!: Peripheral;
  editMode= false;
  peripheralForm!: FormGroup;
  peripheralsubcription!: Subscription;
  currentDate = new Date();

  constructor(private peripheralService: PeripheralService,
    private activeRoute: ActivatedRoute,
    private store: Store<AppState.AppState>) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((params: Params)=>{
      if (params['id'] != null){
        this.getPeripheral(params['id']);
      }
    });

    this.inittForm();
  }


  inittForm(){

    let vendor = "";
    let createDate = new Date();
    let state= "";
   

    if(this.editMode){
      vendor = this.peripheral.vendor;
      createDate = this.peripheral.createDate,
      state = this.peripheral.state;
    }

    this.peripheralForm = new FormGroup({
      'vendor': new FormControl(vendor,Validators.required),
      'createDate': new FormControl(createDate,Validators.required),
      'state':new FormControl(state,Validators.required),
    });


  }

  checkState(control: FormControl){
    let value = control.value;
    return (value != 'online' || value != 'offline' )?{'invalidState':true}:null;   
  }

  onSubmit(){
    //console.log(this.peripheralForm);
    if(this.editMode){
      let localPeripheral = this.peripheralForm.value as Peripheral;
      this.store.dispatch(peripheralActions.EditPeripheral({id:this.peripheral.id,peripheral:localPeripheral}));

    }else{
      let peripheral = this.peripheralForm.value as Peripheral;
      this.store.dispatch(peripheralActions.AddPeripheral({peripheral}))
      console.log(peripheral);
    }

  }

  private getPeripheral(id:number){

    this.peripheralService.getPeripheralById(id).subscribe({
      next:(response)=>{
        this.peripheral = response as Peripheral;
        this.editMode = true;
        this.inittForm();
      }
    })

  }

  Cancel(){
    this.store.dispatch(peripheralActions.StoptEdit());
    this.store.dispatch(peripheralActions.Redirect());
  }

}
