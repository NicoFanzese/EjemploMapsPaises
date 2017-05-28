import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaisEnMapa} from '../pais-en-mapa/pais-en-mapa';
/**
 * Generated class for the DetallePais page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalle-pais',
  templateUrl: 'detalle-pais.html',
})
export class DetallePais {

  public pais;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais = this.navParams.get("objetoPais");    
    console.log("pais:" + this.pais);
  }

  irAMapa(pais){
    console.log("voy a Mapa de: "+ pais.name);
    this.navCtrl.push(PaisEnMapa,{"objetoPais": pais});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePais');
  }

}
