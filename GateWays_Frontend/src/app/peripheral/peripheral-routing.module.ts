import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeripheralEditComponent } from './peripheral-edit/peripheral-edit.component';
import { PeripheralListComponent } from './peripheral-list/peripheral-list.component';

const routes: Routes = [
  {path:'',component:PeripheralListComponent},
  {path:'new',component:PeripheralEditComponent},
  {path:'edit/:id',component:PeripheralEditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeripheralRoutingModule { }
