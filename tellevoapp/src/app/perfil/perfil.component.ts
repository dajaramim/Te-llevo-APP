import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  users: any = [];
  user: any = [];

  constructor( public usersService: UsersService) { }

  ngOnInit() {
    
    this.users = this.usuarios();
    this.user = this.usuario();
    
  }
  usuarios(){
    this.usersService.getUsers()
    .subscribe((data)=>{
      this.users=data;
    }) 
  }
  usuario() {
    this.usersService.getUser(1)
    .subscribe((data)=>{
      this.user=data;
    })
  }
}
