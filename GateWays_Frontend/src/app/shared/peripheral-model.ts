

export interface Peripheral{
    id:number,
    vendor:string,
    date:Date,
    state:string
}


export enum peripheralstate {
    online,
    offline
}