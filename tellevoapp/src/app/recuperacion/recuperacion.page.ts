import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  public email: any;
  constructor(private toastController: ToastController, private router: Router) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Se enviará un correo para cambiar su contraseña a ' + this.email,
      duration: 6500,
      position: position
    });

    await toast.present();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
