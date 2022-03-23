

export interface Peripheral{
    id:number,
    vendor:string,
    createDate:Date,
    state:string
}


export enum peripheralstate {
    online,
    offline
}