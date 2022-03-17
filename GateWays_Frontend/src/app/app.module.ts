import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeripheralListComponent } from './peripheral/peripheral-list/peripheral-list.component';
import { PeripheralModule } from './peripheral/peripheral.module';
import { ErrorHandlerService } from './services/error-handler.service';
import { GatewayService } from './services/gateway.service';
import { HttpRepositoryService } from './services/http-repository.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { HoverDirective } from './shared/hover.directive';
import { ErrorComponent } from './error/error.component';
import { ErrorhandleInterceptor } from './shared/error-handle.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ErrorComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    
  ],
  providers: [
    HttpRepositoryService,
    GatewayService,
    ErrorHandlerService,
    {provide: 
      HTTP_INTERCEPTORS,
      useClass: ErrorhandleInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
