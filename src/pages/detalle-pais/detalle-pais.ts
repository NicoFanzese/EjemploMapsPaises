import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePais');
  }

}
