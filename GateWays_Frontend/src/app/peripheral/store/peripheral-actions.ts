import { createAction, props } from "@ngrx/store";
import { Peripheral } from "../peripheral-model";


export const StartLoad = createAction('[PeripheralListComponent] StartLoad');

export const Loaded = createAction('[PeripheralListComponent] Loaded', props<{peripheralList: Peripheral[]}>());

export const AddPeripheral = createAction('[PeripheralEdit] AddPeripheral', props<{peripheral:Peripheral}>());

export const StartDelete = createAction('[PeripheralEdit] StartDelete', props<{id:number,pos:number}>());

export const DeletePeripheral = createAction('DeletePeripheral');

export const StartEdit = createAction('[PeripheralListComponent] StartEdit', props<{pos:number}>());

export const StoptEdit = createAction('[PeripheralListComponent] StoptEdit');

export const EditPeripheral = createAction('[PeripheralEdit] EditPeripheral',props<{id:number,peripheral:Peripheral}>());

export const PeripheralError = createAction('PeripheralError', props<{message:string}>());

export const Redirect = createAction('Redirect');

