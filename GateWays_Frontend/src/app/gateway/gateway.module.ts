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
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';



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
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule
  ],
  exports:[]
})
export class GatewayModule { }
