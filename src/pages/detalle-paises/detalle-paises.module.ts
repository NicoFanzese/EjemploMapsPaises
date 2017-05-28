import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePaises } from './detalle-paises';

@NgModule({
  declarations: [
    DetallePaises,
  ],
  imports: [
    IonicPageModule.forChild(DetallePaises),
  ],
  exports: [
    DetallePaises
  ]
})
export class DetallePaisesModule {}
