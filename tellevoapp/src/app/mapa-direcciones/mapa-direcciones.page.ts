import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';



import{Popup} from 'mapbox-gl';

@Component({
  selector: 'app-mapa-direcciones',
  templateUrl: './mapa-direcciones.page.html',
  styleUrls: ['./mapa-direcciones.page.scss'],
})
export class MapaDireccionesPage implements OnInit {
    //public mapaBox: mapboxgl.Map;
public style ='mapbox://styles/ig-torrealba/cl9zyn79l002u14k6eozbqz39';

constructor() {
  mapboxgl.accessToken = environment.MAPBOX_KEY;
}
ionViewDidEnter(){
  this.generarMapaBox();

}

ngOnInit(){

};

// usar orden: longitud y latitud ......
generarMapaBox(){

  // se Instancia Mapa
  const mapaBox = new mapboxgl.Map({
    container: 'mapaBox',
    style: this.style,
    zoom: 15,
    center: [-71.53299098234962,-33.03305958330198],
    pitch:60,
    bearing:-20,
    projection: {
      name: 'mercator'
      }

  });
  mapaBox.resize();   

  //Se configura popup de marcador
  const popup = new Popup()
  .setHTML('<div>'+
  '<h4>mui wenas</h4>'+
  '<span>si</span>'+
  '</div>');


  // Se instancia el Geocoder de MapBox
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    flyTo: {
      bearing: 3,
      speed: 1.2,// Make the flying slow.
      curve: 1, 
      easing: function (t) {
      return t;
      }
      },
    languages:'es',
    country: 'ch',
    placeholder: 'a donde te dirijes?',
    marker: {
    color: 'orange',

    },
    
    mapboxgl: mapboxgl
    });

    //Se crea marcador
    const marker = new mapboxgl.Marker({
    
      draggable: false,
      color:'red'
      }).setLngLat([ -71.53299098234962,-33.03305958330198])
      .addTo(mapaBox)
      .setPopup(popup);
     
    //se añade Geocoder a mapa
    mapaBox.addControl(geocoder);


    mapaBox.addControl(new mapboxgl.NavigationControl());


    // Se recuperan datos de busqueda de Geocoder
    geocoder.on('result', function(e) {
        
      console.log(e.result.center)
      console.log(e.result.place_name)
     })





};
  


  
}




