import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HoraViajeGuardGuard } from '../guards/hora-viaje-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [HoraViajeGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
