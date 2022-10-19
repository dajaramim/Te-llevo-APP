import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  users: any = [];

  constructor( public UsersService: UsersService) { }

  ngOnInit() {
    
    this.users = this.usuarios();


  }
  usuarios(){
    this.UsersService.getUsers()
    .subscribe((data)=>{
      this.users=data;
    }) 
  }
}
