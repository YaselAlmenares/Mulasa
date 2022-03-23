
import { ActionReducerMap } from '@ngrx/store';
import * as PeripheralReducer from '../peripheral/store/peripheral-reducer';


//Add many reducer and 

export interface AppState {
    peripheral: PeripheralReducer.PeripheralState,
}

export const AppReducers : ActionReducerMap<AppState> ={
    peripheral: PeripheralReducer.PeripheralReducer,
}