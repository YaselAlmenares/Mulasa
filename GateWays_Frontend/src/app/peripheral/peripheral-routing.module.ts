import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeripheralListComponent } from './peripheral-list/peripheral-list.component';

const routes: Routes = [
  {path:'',component:PeripheralListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeripheralRoutingModule { }
