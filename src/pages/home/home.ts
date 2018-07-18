import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  private alertController:AlertController ) {

  }
  agregarTarea(){
    console.log("click");
    const alerta=this.alertController.create({
      title:'Agregar tarea',
      inputs:[
        {
          name:'tareaInput',
          placeholder:'ingrese la tarea....'
        
        }
      ],
      buttons:[
        {
          text:'cancelar',

        },
        {
          text:'Agregar'
        }
      ]
    });
    alerta.present();
  }
}
