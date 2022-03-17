import { Peripheral } from "../peripheral/peripheral-model"

export interface Gateway {
    id:string,
    name:string,
    ipv4:string,
}

export interface GatewayP {
    id:string,
    name:string,
    ipv4:string,
    peripherals:Peripheral[],
}