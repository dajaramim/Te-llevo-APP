import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaDireccionesPageRoutingModule } from './mapa-direcciones-routing.module';

import { MapaDireccionesPage } from './mapa-direcciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaDireccionesPageRoutingModule
  ],
  declarations: [MapaDireccionesPage]
})
export class MapaDireccionesPageModule {}
