import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { GatewayListComponent } from './gateway-list/gateway-list.component';

const routes: Routes = [
  {path:'',component:GatewayListComponent},
  {path:'new',component:GatewayEditComponent},
  {path:'edit/:id',component:GatewayEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
