import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/gateway', pathMatch:'full'},
  {path:'gateway',loadChildren:()=>import('./gateway/gateway.module').then(m=>m.GatewayModule)},
  {path:'peripheral',loadChildren:()=>import('./peripheral/peripheral.module').then(m=>m.PeripheralModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
