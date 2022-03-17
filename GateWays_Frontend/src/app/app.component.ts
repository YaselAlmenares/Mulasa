import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from './services/error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  errorhandlersubscription!: Subscription;
  errorMessage='';
  title = 'GateWays_Frontend';

  
  constructor( private errorhandlerservices : ErrorHandlerService) {}
 

  ngOnInit(): void {
    this.errorhandlersubscription = this.errorhandlerservices.errorMessage.subscribe(errorMessage=>{
      this.errorMessage = errorMessage;
    });
  }

  OnClose(){
    this.errorMessage='';
  }

  ngOnDestroy(): void {
    this.errorhandlersubscription.unsubscribe();
  }

}
