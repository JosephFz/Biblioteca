import { Component } from '@angular/core';
import { Libro } from 'src/app/modelo/Libro';
import { LibroService } from 'src/app/servicio/libro.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent {

  listaLibro:Libro[]=[]

  constructor(private apiLib:LibroService,private ruta:Router){}
  ngOnInit(){
    this.apiLib.getLibro().subscribe(response=>{
      this.listaLibro=response
    })

}

editar(codLibro:Number){
  this.ruta.navigate(['libro/editar/',codLibro])
 }


 eliminar(codAuto:Number){
  this.apiLib.deleteLibro(codAuto).subscribe(response=>{
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
