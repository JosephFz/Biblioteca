import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {

  listaUsuario:Usuario[]=[]

  constructor(private apiUsuario:UsuarioService,private ruta:Router){}
  ngOnInit(){
    this.apiUsuario.getUsuario().subscribe(response=>{
      this.listaUsuario=response
    })

}

editar(codUsuario:Number){
  this.ruta.navigate(['usuario/editar/',codUsuario])
 }


 eliminar(codUsuario:Number){
  this.apiUsuario.deleteUsuario(codUsuario).subscribe(response=>{
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
