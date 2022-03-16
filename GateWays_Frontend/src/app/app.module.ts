import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeripheralListComponent } from './peripheral/peripheral-list/peripheral-list.component';
import { PeripheralModule } from './peripheral/peripheral.module';
import { GatewayService } from './services/gateway.service';
import { HttpRepositoryService } from './services/http-repository.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { HoverDirective } from './shared/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    
  ],
  providers: [HttpRepositoryService,GatewayService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
