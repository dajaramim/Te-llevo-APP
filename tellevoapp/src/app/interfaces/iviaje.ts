import { Time } from "@angular/common";

export interface IViaje {
    id:number;
    strCalle: string;
    dateFecha: Date;
    timeHora: Time;
    numPrecio: number;
    numCupos: number;

}
