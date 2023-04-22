import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  title = 'Upsin';

  position = {
    lat: 23.265437,
    lng: -106.373968
  }

  label = {
    color: 'white',
    text: 'UPSIN'
  }
}
