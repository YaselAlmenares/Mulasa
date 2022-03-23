import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';
import * as peripheralSelectors from '../peripheral/store/peripheral-selectors';
import * as AppState from '../app-store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  //@Input('message') message!: string;
  //@Output() close = new EventEmitter<void>();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  errorhandlersubscription!: Subscription;
  errorhandlerSelector!: Subscription;
  
  errorMessage='';
  mySnackSpine: any;
  @ViewChild('myspinner', { read: TemplateRef }) myspinnerTemplate!:TemplateRef<any>;
 

 


  constructor( private errorhandlerservices : ErrorHandlerService,private _snackBar: MatSnackBar,
    private store: Store<AppState.AppState>) { 

  }

  ngOnInit(): void {
    this.errorhandlersubscription = this.errorhandlerservices.errorMessage.subscribe(errorMessage=>{
      this.openSnackBar(errorMessage);     
    });

    

    this.errorhandlerSelector = this.store.select(peripheralSelectors.selectErrorMessage).subscribe({
      next:(errorMessage)=>{
        if(errorMessage!=""){
          this.openSnackBar(errorMessage);
          console.log(errorMessage);          
        } 
      }
    });


  }

  onClose() {
   // this.close.emit();
  }

  private openSnackBar(message:string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:4000,
    });
  }

 /* private open(){
    const config = new MatSnackBarConfig();
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    config.panelClass = ["custom-style"];
   // config.
    this.mySnackSpine = this._snackBar.openFromTemplate(this.myspinnerTemplate,config);
  }*/

}
