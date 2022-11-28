import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {Platform, isPlatform, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

const getConfig = () => {

  let config = {
  };

  if (isPlatform('iphone')){
    return {
      rippleEffect: false,
      animated:false,

    }

  }
  if (isPlatform('desktop')){
    return {
      rippleEffect: false,
      animated:false,

    }

  }

  return {
    animated:true,
    hardwareBackButton:true,
    swipeBackEnabled:true,
    rippleEffect: true,
  }


}


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(getConfig()), AppRoutingModule,IonicStorageModule.forRoot(), BrowserAnimationsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    public platform: Platform

  ){
    this.platform.pause.subscribe(async () => {
      alert('La aplicacion esta en 2do plano');
    });


  }
}
