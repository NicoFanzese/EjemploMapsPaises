import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaisEnMapa page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pais-en-mapa',
  templateUrl: 'pais-en-mapa.html',
})
export class PaisEnMapa {
  public pais;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais = this.navParams.get("objetoPais");    
    console.log("pais:" + this.pais);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisEnMapa');
  }

}
