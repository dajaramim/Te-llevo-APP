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
        

        console.log(this.tipoUser);
        if (this.tipoUser === 'conductor') {
          
          
          this.textoViaje = "Tus viajes"
        }
        else {
          document.getElementById("section").style.display = "none";
          this.textoViaje = "Viajes disponibles"
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
    this.bdlocalservice.guardarViaje(this.calle, this.fecha, this.hora, this.precio, this.cupos)
    this.modal.dismiss(this.name, 'confirm');
    this.calle = "";
    this.fecha = new Date("01/01/2022");
    this.precio = 0;
    this.cupos = 0;
    
  }
 



};


