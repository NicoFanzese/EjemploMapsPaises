import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetallePaises } from '../pages/detalle-paises/detalle-paises';
import {MiServicio} from '../providers/mi-servicio';
import { HttpModule } from '@angular/http';
import {DetallePais} from '../pages/detalle-pais/detalle-pais';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {PaisEnMapa} from '../pages/pais-en-mapa/pais-en-mapa';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallePaises,
    DetallePais,
    PaisEnMapa
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1DHRuo02hKYjdhODQgaENNVpiQN8_W24'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallePaises,
    DetallePais,
    PaisEnMapa
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MiServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
