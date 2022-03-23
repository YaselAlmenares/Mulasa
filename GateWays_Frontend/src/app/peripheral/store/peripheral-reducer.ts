import { createReducer, on } from "@ngrx/store";
import { Peripheral } from "../peripheral-model";
import * as action from "./peripheral-actions";

export interface PeripheralState {
    peripherals : Peripheral[],
    errorMessage: string,
    isLoading: boolean,
    pos:number
    
}


const initialState: PeripheralState={
    peripherals: [],
    errorMessage: "",
    isLoading: false,
    pos:-1
}

export const PeripheralReducer = createReducer(
    initialState,
    on(action.StartLoad,((state)=>_StartLoad(state))),
    on(action.Loaded,((state,payload)=>_Loaded(state,payload))),
    //on(action.AddPeripheral,((state,payload)=>_AddPeripheral(state,payload))),
    on(action.StartDelete,((state,payload)=>_StartDelete(state,payload))),
    on(action.DeletePeripheral,((state,payload)=>_DeletePeripheral(state,payload))),
    on(action.StartEdit,((state,payload)=>_StartEdit(state,payload))),
    on(action.EditPeripheral,((state,payload)=>_EditPeripheral(state,payload))),
    on(action.StoptEdit,((state)=>_StopEdit(state))),
    on(action.PeripheralError,((state,payload)=>_PeripheralError(state,payload))),
    
);

function _StartLoad(state:PeripheralState){
    return {
        ...state,
        errorMessage:"",
        isLoading:true
    }
}

function _Loaded(state:PeripheralState, payload:any){
    return{
        ...state,
        isLoading:false,
        errorMessage:"",
        peripherals:payload.peripheralList
    }
}

function _StartDelete(state:PeripheralState, payload:any){
    return{
        ...state,
        pos:payload.pos,
        errorMessage:"",
        isLoading:true
    }
    
}


function _DeletePeripheral(state:PeripheralState, payload:any){
    return{
        ...state,
        peripherals: state.peripherals.filter((per,index)=>{
            return index !== state.pos
        }),
        errorMessage:"",
        pos:-1,
        isLoading:false
    }
}

function _StartEdit(state:PeripheralState,payload:any){
    return{
        ...state,
        pos:payload.pos,
        errorMessage:""
    }
}

function _StopEdit(state:PeripheralState){
    return{
        ...state,
        pos:-1,
        errorMessage:"",
        isLoading:false
    }
}

function _EditPeripheral(state:PeripheralState,payload:any){
    

    const list = state.peripherals.filter((per,index)=>{
        return payload.id == per.id;
    });

    const per = list[0];

    const updatedPeripheral = {
        ...per,
        ...payload.peripheral,
    };

    const updatedPeripherals = [...state.peripherals];
    updatedPeripheral[state.pos]=updatedPeripheral;

    return {
        ...state,
        peripherals:updatedPeripheral,
        pos:-1,
        errorMessage:""
    }

}

function _PeripheralError(state:PeripheralState,payload:any){
    return{
        ...state,
        errorMessage:payload.message,
        pos:-1,
        isLoading:false
    }
}