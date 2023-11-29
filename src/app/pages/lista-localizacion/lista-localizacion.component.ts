import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Localizacion } from 'src/app/modelo/Localizacion';
import { LocalizacionService } from 'src/app/servicio/localizacion.service';
import Swal from 'sweetalert2';

import * as componentHandler from 'material-design-lite';

@Component({
  selector: 'app-lista-localizacion',
  templateUrl: './lista-localizacion.component.html',
  styleUrls: ['./lista-localizacion.component.css']
})
export class ListaLocalizacionComponent {
  listaLocalizacion:Localizacion[]=[]

  constructor(private apiLocalizacion:LocalizacionService,private ruta:Router){}
  ngOnInit(){
    this.apiLocalizacion.getLocalizacion().subscribe(response=>{
      this.listaLocalizacion=response
    })




}

ngAfterViewInit() {
  // Inicializa Material Design Lite después de que la vista del componente se ha renderizado
  componentHandler.upgradeAllRegistered();
}

editar(codLocalizacion:Number){
  this.ruta.navigate(['localizacion/editar/',codLocalizacion])
 }


 eliminar(codLocalizacion:Number){
  this.apiLocalizacion.deleteLocalizacion(codLocalizacion).subscribe(response=>{
    Swal.fire(
      'Buen Trabajo',
      'Se elimino correctamente!',
      'success'
    )
    setTimeout(() => {
     location.reload();
   }, 1000);
  })
 }



}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

