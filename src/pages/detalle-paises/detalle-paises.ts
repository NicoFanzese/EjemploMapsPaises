import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MiServicio} from '../../providers/mi-servicio';
import {DetallePais} from '../detalle-pais/detalle-pais';
/**
 * Generated class for the DetallePaises page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-paises',
  templateUrl: 'detalle-paises.html',
})
export class DetallePaises {
  private paises: any[] = [];

  constructor(private navCtrl: NavController,
              private paisesService: MiServicio)
  {

    this.paisesService.getPaises().subscribe(
      data => this.paises = data,
      err => console.error(err),
      () => console.log("Paises traidos con éxito")
    )

  }

  irADetalle(pais){
    console.log("voy al detalle de: "+ pais.name);
    this.navCtrl.push(DetallePais,{"objetoPais": pais});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePaises');
  }


}
