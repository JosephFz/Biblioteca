import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/modelo/Autor';
import { AutorService } from 'src/app/servicio/autor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
  styleUrls: ['./listar-autor.component.css']
})
export class ListarAutorComponent {

  listaAutor:Autor[]=[]

  constructor(private apiAutor:AutorService,private ruta:Router){}
  ngOnInit(){
    this.apiAutor.getAutor().subscribe(response=>{
      this.listaAutor=response
    })

}

editar(codAutor:Number){
  this.ruta.navigate(['autor/editar/',codAutor])
 }


 eliminar(codAutor:Number){
  this.apiAutor.deleteAutor(codAutor).subscribe(response=>{
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
