import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/Categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent {

  listaCategorias:Categoria[]=[]

  constructor(private apiCat:CategoriaService,private ruta:Router){}
  ngOnInit(){
    this.apiCat.getCategoria().subscribe(response=>{
      this.listaCategorias=response
    })


}


editar(codCate:Number){
  this.ruta.navigate(['libro/editar/',codCate])
 }


 eliminar(codAuto:Number){
  this.apiCat.deleteCategoria(codAuto).subscribe(response=>{
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
