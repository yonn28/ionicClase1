import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {
  tareas=[];
  tareasArchivadas=[];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  agregarTarea(tarea:string){
     this.tareas.push(tarea);
  }
  archivarTarea(indiceTarea){
    let tarea=this.tareas[indiceTarea];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indiceTarea,1);
  }
  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }

}
