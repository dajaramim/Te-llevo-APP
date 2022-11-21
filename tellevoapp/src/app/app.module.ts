import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { isPlataform, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

// https://ionicframework.com/docs/angular/config
const getConfig = () => {

  let plataforma= '' ;

  let config = {
    animated:true,
    hardwareBackButton:true,
    swipeBackEnabled:true,
    rippleEffect: true,
    plataforma
  };

  if (isPlatform('iphone')){
    config = {
      ...config,
      rippleEffect: false,

    }
    console.log(plataforma);
  }
  if (isPlatform('android')){
    config = {
      ...config,
      rippleEffect: true,

    }
    console.log(plataforma);

  }
  if (isPlatform('mobileweb')){
    config = {
      ...config,
      rippleEffect: false,


    }
    console.log(plataforma);
  }
  return config;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(getConfig()), AppRoutingModule,IonicStorageModule.forRoot(), BrowserAnimationsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
