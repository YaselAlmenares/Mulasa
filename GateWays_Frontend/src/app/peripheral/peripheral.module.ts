import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeripheralListComponent } from './peripheral-list/peripheral-list.component';
import { PeripheralRoutingModule } from './peripheral-routing.module';
import { HoverDirective, HoverDirectiveModule } from '../shared/hover.directive';
import { PeripheralAuxComponent } from './peripheral-aux/peripheral-aux.component';



@NgModule({
  declarations: [
    PeripheralListComponent,
    PeripheralAuxComponent,
    
    
  ],
  imports: [
    CommonModule,
    PeripheralRoutingModule,
    HoverDirectiveModule

  ],
  exports:[
    PeripheralListComponent,
    PeripheralAuxComponent
  ]
})
export class PeripheralModule { }
