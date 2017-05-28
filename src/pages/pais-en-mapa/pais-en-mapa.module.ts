import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaisEnMapa } from './pais-en-mapa';

@NgModule({
  declarations: [
    PaisEnMapa,
  ],
  imports: [
    IonicPageModule.forChild(PaisEnMapa),
  ],
  exports: [
    PaisEnMapa
  ]
})
export class PaisEnMapaModule {}
