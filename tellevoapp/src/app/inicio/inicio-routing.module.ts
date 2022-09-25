import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from '../general/general.component';
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'valoracion',
        component: ValoracionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
