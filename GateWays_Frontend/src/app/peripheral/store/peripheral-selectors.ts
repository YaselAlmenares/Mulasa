import { createFeatureSelector,createSelector } from "@ngrx/store";
import * as peripheralReducer from './peripheral-reducer';



export const peripheralSelector = createFeatureSelector<peripheralReducer.PeripheralState>('peripheral');

export const selectPeripherals = createSelector(
    peripheralSelector,
    (peripheral)=> peripheral.peripherals
);

export const selectErrorMessage = createSelector(
    peripheralSelector,
    (peripheral)=> peripheral.errorMessage
);

export const selectIsLoading = createSelector(
    peripheralSelector,
    (peripheral)=> peripheral.isLoading
);