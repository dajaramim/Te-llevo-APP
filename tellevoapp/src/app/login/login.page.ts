import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string = '';
  public password: string = '';
  constructor(private router: Router, private toastController: ToastController) { }
  
  async onLogin(position: 'top' | 'middle' | 'bottom') {
    const toast_error = await this.toastController.create({
      message: 'Usuario o contraseña vacíos o incorrectos',
      duration: 1500,
      position: position
    });

    let navigationExtras: NavigationExtras = {
      state: {user: this.user}
    };
    if (this.user.length === 0 || this.user.length < 6 || this.password.length === 0 || this.password.length < 8)
    {
      await toast_error.present();
    }
    else
    {
    this.router.navigate(['/home'], navigationExtras);
    }
    
  }
  ngOnInit() {
  }

}
