import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SignosComponent } from './signos/signos.component';
import { SignosfullComponent } from './signosfull/signosfull.component';
import { SignosadvComponent } from './signosadv/signosadv.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    MapaComponent,
    SignosComponent,
    SignosfullComponent,
    SignosadvComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
