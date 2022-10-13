import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  public tipoUser: string;
  public btnTipoCliente: string;
  public textoViaje: string;
  constructor(private animationCtrl: AnimationController, private router: Router, private activeroute: ActivatedRoute) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tipoUser = this.router.getCurrentNavigation().extras.state.cliente;
        console.log(this.tipoUser);
        if(this.tipoUser === 'conductor')
        {
          this.btnTipoCliente = "Agendar Viaje"
        }
        else {
          this.btnTipoCliente = "Buscar Viaje"
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

}
// abrir modal
@ViewChild(IonModal) modal: IonModal;
message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string;

cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.name, 'confirm');
}



};


