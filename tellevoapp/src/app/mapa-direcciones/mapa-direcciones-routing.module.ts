import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaDireccionesPage } from './mapa-direcciones.page';

const routes: Routes = [
  {
    path: '',
    component: MapaDireccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaDireccionesPageRoutingModule {}
