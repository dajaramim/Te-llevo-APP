import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  public nombreUsuario: string;
  constructor(private router: Router) { 
    
  }
  
  segmentChanged($event) {
    console.log($event.detail.value);
    let direction = $event.detail.value
    this.router.navigate(['inicio/' + direction])
  }

  ngOnInit() {

  }
}
