import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapDestinosPage } from './map-destinos.page';

const routes: Routes = [
  {
    path: '',
    component: MapDestinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapDestinosPageRoutingModule {}
