import { Component, Injectable, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class LoginPage implements OnInit {
  public user = {
    name: "",
    password: ""
  }
  users: any = [];


  constructor(private router: Router, private toastController: ToastController, private usersService: UsersService) { }
  
  async onLogin(position: 'top' | 'middle' | 'bottom') {
    const toast_error = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos',
      duration: 2500,
      position: position
    });

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user.name
      }
    };
    
     for (let usuario of this.users){ 
      if (this.user.name ===  usuario.username  && this.user.password ===  usuario.password )
      {

        this.router.navigate(['/home'], navigationExtras);
        return true;
        
      }     
    } 
     await toast_error.present(); 
    
  }
  usuarios(){
    this.usersService.getUsers()
    .subscribe((data)=>{
      this.users=data;
    }) 
  }
  ngOnInit() {
    this.usuarios();
  }

}
