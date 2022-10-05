import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-c',
  templateUrl: './inicio-c.page.html',
  styleUrls: ['./inicio-c.page.scss'],
})
export class InicioCPage implements OnInit {
 // ANIMACION MODAL

 constructor(private animationCtrl: AnimationController) {}

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



}