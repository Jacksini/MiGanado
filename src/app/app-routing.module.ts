import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MapaComponent } from './mapa/mapa.component';
import { SignosComponent } from './signos/signos.component';
import { SignosfullComponent } from './signosfull/signosfull.component';
import { SignosadvComponent } from './signosadv/signosadv.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { MedicoComponent } from './medico/medico.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'navbar', component: NavBarComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'signos', component: SignosComponent },
  { path: 'normal', component: SignosfullComponent },
  { path: 'advertencia', component: SignosadvComponent },
  { path: 'config', component: ConfiguracionComponent },
  { path: 'signosFull', component: SignosfullComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'serviciosMedicos', component: MedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
