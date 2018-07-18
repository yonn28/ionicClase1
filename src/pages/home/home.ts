import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray} from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas =[];
  habilitarOrdenamiento=true;
  constructor(
  public navCtrl: NavController,
  private alertController:AlertController,
  private servicioTareas:TareaProvider ) {
    this.tareas=this.servicioTareas.obtenerTareas();
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
          text:'Agregar',
          handler: datos => {
             
            //  this.tareas.push(datos.tareaInput);
             this.servicioTareas.agregarTarea(datos.tareaInput);
            //  console.log(this.tareas);
          }
        }
      ]
    });
    alerta.present();
  }
  toogleOrdenamiento(){
    this.habilitarOrdenamiento=!this.habilitarOrdenamiento; 
    console.log("entre a toogle");
  }
  ordenarArray(evento){
    reorderArray(this.tareas,evento)
    // console.log(evento);
  }
}
