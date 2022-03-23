import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { PeripheralService } from "src/app/services/peripheral.service";
import { Peripheral } from "../peripheral-model";
import * as peripheralActions from './peripheral-actions';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from "@angular/common/http";
import { BusinessException } from "src/app/shared/error-interface";




@Injectable()
export class PeripheralEffects{
    


    constructor(
        private actions: Actions,
        private peripheralService:PeripheralService,
        private router: Router
    ) {}

    $loading = createEffect(()=>this.actions.pipe(
        ofType(peripheralActions.StartLoad),
        switchMap(()=>
        this.peripheralService.getPeripheral().pipe(
            map((response)=>{
                let peripheralList = response as Peripheral[];
                console.log(peripheralList);
                return peripheralActions.Loaded({peripheralList});
            }),
            catchError((error)=>{
                console.log(error);
                return of(peripheralActions.PeripheralError({message:error}))
            })
        ))
    ));

    $addPeripheral = createEffect(()=>this.actions.pipe(
        ofType(peripheralActions.AddPeripheral),
        switchMap((action)=>
            this.peripheralService.addPeripheral(action.peripheral).pipe(
                map(()=>{
                    return peripheralActions.Redirect();
                }),
                catchError((error)=>{
                    console.log(error);
                    return of(peripheralActions.PeripheralError({message:error}))
                })
            ))
    ));

    $startDelete = createEffect(()=>this.actions.pipe(
        ofType(peripheralActions.StartDelete),
        switchMap((action)=>
            
                 this.peripheralService.deletePeripheral(action.id).pipe(
                map(()=>{ 
                    console.log("START");
                    return peripheralActions.DeletePeripheral();}
                    
                ),
                catchError((error)=>{
                    console.log(error.error);
                    let localerror = error.error as BusinessException;
                    return of(peripheralActions.PeripheralError({message:localerror.Message}));
                }                    
                )
            )
            )
    ));


    $editPeripheral = createEffect(()=>this.actions.pipe(
        ofType(peripheralActions.EditPeripheral),
        switchMap((action)=>
            this.peripheralService.updatePeripheral(action.id,action.peripheral).pipe(
                map(()=>{
                    return peripheralActions.Redirect();
                }),
                catchError((error)=>{
                    console.log(error);
                    
                    return of(peripheralActions.PeripheralError({message:error}))
                })
            ))
    ));



    $redirect = createEffect(()=>this.actions.pipe(
        ofType(peripheralActions.Redirect),
        tap(()=>{
            this.router.navigate([environment.PERIPHERAL_URL]);
        })
    ),{ dispatch: false });

   
    
}

