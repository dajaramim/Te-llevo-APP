import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IViaje } from '../interfaces/iviaje'
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {
  viaje: IViaje[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 
    this.init();
    this.cargarViajes();
  }
  guardarViaje(calle: string, fecha: Date, hora: Time, precio: number, cupos:number){
    
      this.viaje.unshift({strCalle:calle, dateFecha:fecha, timeHora:hora, numPrecio:precio, numCupos: cupos})
      this._storage.set('viaje',this.viaje);
  }
  async cargarViajes() {
    const miViaje=await this.storage.get('viaje');
    if (miViaje) {
      this.viaje=miViaje;
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


}

