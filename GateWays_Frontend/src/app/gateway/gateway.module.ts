import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import { RouterModule, Routes } from '@angular/router';
import { GatewayRoutingModule } from './gateway-routing.module';
import { HoverDirective, HoverDirectiveModule } from '../shared/hover.directive';
import { BrowserModule } from '@angular/platform-browser';
import { PeripheralListComponent } from '../peripheral/peripheral-list/peripheral-list.component';
import { PeripheralModule } from '../peripheral/peripheral.module';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GatewayListComponent,
    GatewayEditComponent,
    
    
  ],
  imports: [
    CommonModule,
    GatewayRoutingModule,
    PeripheralModule,
    HoverDirectiveModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class GatewayModule { }
