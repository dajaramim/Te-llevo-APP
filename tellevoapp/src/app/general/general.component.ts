import { Component, ElementRef, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { BdLocalService } from '../services/bd-local.service';
import { Time } from '@angular/common';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  public tipoUser: string;
  public btnTipoCliente: string;
  public textoViaje: string;
  public textoTomar: string;

  public destino: any;
  public usr: any;


  ide: number ;
  calle: string;
  fecha: Date;
  hora: Time;
  precio: number;
  cupos: number;
  viajes: any = [];
  
  
  constructor(private animationCtrl: AnimationController, private router: Router, private activeroute: ActivatedRoute, public bdlocalservice: BdLocalService) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tipoUser = this.router.getCurrentNavigation().extras.state.cliente;

        // viene de pag mapa
        this.destino = this.router.getCurrentNavigation().extras.state.nuevoDestino;
        this.usr = this.router.getCurrentNavigation().extras.state.usr;
        console.log("hola traigo el destino desde el mapa :D "+ this.destino);
        this.calle =  this.destino;



        console.log(this.tipoUser);


        if (this.tipoUser === 'pasajero') {
          
          document.getElementById("section").style.display = "none";
          
          this.textoViaje = "Viajes disponibles"
          
          this.textoTomar= "Tomar"
        }
        else if (this.tipoUser === 'conductor') {
          
          
          this.textoViaje = "Tus viajes"
          this.textoTomar= "Empezar"

        }
        else {
          this.tipoUser = ''
        };
      }

    });

  }

  // ANIMACION MODAL


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

   ngOnInit() {
    

    
  };

  ngAfterViewInit() {
    this.viajes = this.bdlocalservice.cargarViajes();
    console.log(this.bdlocalservice.cargarViajes());
    
    
  };
  // abrir modal
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.bdlocalservice.guardarViaje(this.ide ,this.calle, this.fecha, this.hora, this.precio, this.cupos)
    this.modal.dismiss(this.name, 'confirm');

    this.ide + 1;

    this.viajes = this.bdlocalservice.cargarViajes()
    

  }
 



};


