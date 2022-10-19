import { Component, OnInit } from '@angular/core';

import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { CapacitorGoogleMaps } from '@capacitor/google-maps/dist/typings/implementation';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-map-destinos',
  templateUrl: './map-destinos.page.html',
  styleUrls: ['./map-destinos.page.scss'],
})
export class MapDestinosPage implements OnInit {
  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap; 

  constructor() { }

  ngOnInit() {
    this.createMap();
  }



  async createMap(){
    this.map = await GoogleMap.create({
      id: 'soy-el-mapa',
      element: this.mapRef.nativeElement,      
      apiKey: 'AIzaSyC0Wlp9m4d5czogRElQ7Z7-kfObhClHt9Y',
      forceCreate: true,    
      config: {   
        center: {
          lat: -33.035179,
          lng: -71.394616,
        },
        zoom:8, 
      },     
    });

    this.addMarkers();

  }
  async addMarkers(){
    const DuocUc = {
      lat:-33.03352,
      lng:-71.53323,
    };
      const VillaA = {
      lat:-33.04461,
      lng:-71.39055,
    };
    const Quilp = {
      lat:-33.0498,
      lng:-71.4415,
    };
    const Quint = {
      lat:-32.77175,
      lng:-71.53315,
    };
    const Valp = {
      lat:-33.04715,
      lng:-71.61510,
    };
    const Viña = {
      lat:-33.01489,
      lng:-71.54911,
    };
    const limache = {
      lat:-33.00663,
      lng:-71.25971,
    };
    const PeñaBlan = {
      lat:-33.03655,
      lng:-71.35276,
    };


    // se declara array de marcadores
    const marker: Marker[] = [
      {
        coordinate: DuocUc,
        title:'Inicio viaje',
        snippet:'subtitulo',
      },
      {
        coordinate: VillaA,
        title:'Villa Alemana',
        snippet:'',
      },
      {
        coordinate: Quilp,
        title:'Quilpue',
        snippet:'',
      },
      {
        coordinate: Quint,
        title:'Quintero',
        snippet:'',
      },
      {
        coordinate: Valp,
        title:'Valparaiso',
        snippet:'',
      },
      {
        coordinate: Viña,
        title:'Viña del mar',
        snippet:'',
      },
      {
        coordinate: limache,
        title:'Limache',
        snippet:'',
      },
      {
        coordinate: PeñaBlan,
        title:'Peña Blanca',
        snippet:'',
      },
      
    ];
    //se pinta marcador
    await this.map.addMarkers(marker);

    this.map.setOnMarkerClickListener(async (marker) => {
      console.log(marker);
      
    })
  
  }

}
