import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

/**
 * Generated class for the TareasArchivadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {
  TareasArchivas=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private servicioTareas:TareaProvider) {
    this.TareasArchivas=this.servicioTareas.obtenerTareasArchivadas();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasArchivadasPage');
  }

}
