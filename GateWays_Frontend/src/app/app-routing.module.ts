import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/gateway', pathMatch:'full'},
  {path:'gateway',loadChildren:()=>import('./gateway/gateway.module').then(m=>m.GatewayModule)},
  {path:'peripheral',loadChildren:()=>import('./peripheral/peripheral.module').then(m=>m.PeripheralModule)},
  {path:'**',redirectTo:'/page-not-found', pathMatch:'full'},
  {path: 'page-not-found', pathMatch: 'full',component:PageNotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
