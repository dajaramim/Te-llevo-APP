import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  public user: string = '';

  constructor(private toastController: ToastController, private router: Router) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Se le enviará un mensaje de confirmación a su correo electrónico ' + this.user + '@duocuc.cl',
      duration: 6500,
      position: position
    });
    const toast_error = await this.toastController.create({
      message: 'Nombre de usuario vacío o incorrecto',
      duration: 1500,
      position: position
    });

    if (this.user.length === 0 || this.user.length < 5)
    {
      await toast_error.present();
    }
    else
    {
      await toast.present();
      this.router.navigate(['/login']);
    }

  }

  ngOnInit() {
  }

}
