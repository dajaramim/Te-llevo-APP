import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user = {
    name: "",
    password: ""
  }
  constructor(private router: Router, private toastController: ToastController) { }
  
  async onLogin(position: 'top' | 'middle' | 'bottom') {
    const toast_error = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 2500,
      position: position
    });

    let navigationExtras: NavigationExtras = {
      state: {user: this.user.name}
    };
    if (this.user.name.length === 0 || this.user.name.length < 6 || this.user.password.length === 0 || this.user.password.length < 8)
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
