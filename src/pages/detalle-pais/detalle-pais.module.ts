import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePais } from './detalle-pais';

@NgModule({
  declarations: [
    DetallePais,
  ],
  imports: [
    IonicPageModule.forChild(DetallePais),
  ],
  exports: [
    DetallePais
  ]
})
export class DetallePaisModule {}
