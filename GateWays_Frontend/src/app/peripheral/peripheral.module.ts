import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeripheralListComponent } from './peripheral-list/peripheral-list.component';
import { PeripheralRoutingModule } from './peripheral-routing.module';
import { HoverDirective, HoverDirectiveModule } from '../shared/hover.directive';
import { PeripheralAuxComponent } from './peripheral-aux/peripheral-aux.component';
import { PeripheralEditComponent } from './peripheral-edit/peripheral-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    PeripheralListComponent,
    PeripheralAuxComponent,
    PeripheralEditComponent,
    
    
  ],
  imports: [
    CommonModule,
    PeripheralRoutingModule,
    HoverDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  
    

  ],
  exports:[
    //PeripheralListComponent,
    PeripheralAuxComponent
  ]
})
export class PeripheralModule { }
