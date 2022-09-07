import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  handlerMessage = '';
  roleMessage = '';
  nameUser: any;
  public nombre: string = '';
  constructor(private router: Router, private activeroute: ActivatedRoute, private alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.nameUser = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.nameUser);
      }
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Está seguro de salir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
    if (this.handlerMessage === 'Alert confirmed') {
      this.router.navigate(['/login']);

    }
  }
}
