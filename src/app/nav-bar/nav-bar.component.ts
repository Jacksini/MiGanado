import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  path: string | any= '';
  tittle: string = '';

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.path = activeUrl[0].path
    });
  }

  async ngOnInit(){
    if(this.path == 'config')
      this.path = 'Configuración';
    if(this.path == 'serviciosMedicos')
      this.path = 'Servicios Médicos';
    if(this.path == 'notificaciones')
      this.path = 'Notificaciones';
    if(this.path == 'signos')
      this.path = 'Ganado';
    if(this.path == 'mapa')
      this.path = 'Localización';
      if(this.path == 'signosFull')
      this.path = 'Signos Vitales';
  }
}
