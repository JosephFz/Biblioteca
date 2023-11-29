import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelo/Editorial';
import { EditorialService } from 'src/app/servicio/editorial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-editorial',
  templateUrl: './lista-editorial.component.html',
  styleUrls: ['./lista-editorial.component.css']
})
export class ListaEditorialComponent {
  listaEditorial:Editorial[]=[]

  constructor(private apiEditorial:EditorialService,private ruta:Router){}
  ngOnInit(){
    this.apiEditorial.getEditorial().subscribe(response=>{
      this.listaEditorial=response
    })

}

editar(codEditorial:Number){
  this.ruta.navigate(['editorial/editar/',codEditorial])
 }


 eliminar(codEditorial:Number){
  this.apiEditorial.deleteEditorial(codEditorial).subscribe(response=>{
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
