import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicio/usuario.service';
import { RolService } from 'src/app/servicio/rol.service';
import { Rol } from 'src/app/modelo/Rol';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.css']
})

export class NuevoRolComponent {
  codigo:number
  descripcion:string

  estado = false

  listaRol:Rol[]=[]

  soloLetras="[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,35}$"

formulario:FormGroup=new FormGroup({})

constructor(private apiRol:RolService, private fb:FormBuilder,private ruta:Router){}

ngOnInit(){
  this.apiRol.getRol().subscribe(response=>{
    this.listaRol=response
  })

  this.formulario=this.fb.group({
    //mencionar que el codigo no tiene un tipo de validación los corchetes vacíos 04/10/2023
    codigo:[],
    descripcion:[,[Validators.required,Validators.pattern(this.soloLetras)]],
  })
}

grabarDatos(){
  this.estado=true
  //validar estado de la validación
  if(this.formulario.invalid){
    return
  } 
  this.apiRol.saveRol(this.formulario.value).subscribe(response=>{
    Swal.fire(
      'Buen Trabajo',
      'Se registro correctamente!',
      'success'
    )
    this.ruta.navigate(["usuario-lista"])
  })
}

}
