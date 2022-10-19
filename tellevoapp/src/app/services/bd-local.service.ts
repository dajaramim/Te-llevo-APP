import { Injectable } from '@angular/core';
import { IViaje } from '../interfaces/iviaje'
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {
  viajes: IViaje[] = [];
  
  constructor() { 
   
  this.cargarViajes()
  }
  guardarViaje(calle: string, fecha: Date, hora: Time, precio: number, cupos: number) {
    this.viajes.push({strCalle: calle, dateFecha: fecha, timeHora: hora, numPrecio: precio, numCupos: cupos })
    localStorage.setItem('viajes', JSON.stringify(this.viajes))
   }

  cargarViajes() {
    
    const misViajes = JSON.parse(localStorage.getItem('viajes'))
    return misViajes;
    
   
}
    
}



