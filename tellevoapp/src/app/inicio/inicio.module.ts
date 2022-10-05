import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { MatIconModule } from '@angular/material/icon';
import { GeneralComponent } from '../general/general.component';
import { PerfilComponent } from '../perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatIconModule
  ],
  declarations: [InicioPage, GeneralComponent, PerfilComponent]
})
export class InicioPageModule {}
