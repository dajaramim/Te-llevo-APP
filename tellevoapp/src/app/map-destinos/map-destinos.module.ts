import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MapDestinosPageRoutingModule } from './map-destinos-routing.module';

import { MapDestinosPage } from './map-destinos.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapDestinosPageRoutingModule
  ],
  declarations: [MapDestinosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapDestinosPageModule {}
