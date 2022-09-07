import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioCPageRoutingModule } from './inicio-c-routing.module';

import { InicioCPage } from './inicio-c.page';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioCPageRoutingModule,
    MatIconModule,
  ],
  declarations: [InicioCPage]
})
export class InicioCPageModule {}
