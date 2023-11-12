import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/servicio/libro.service';
import { AutorService } from 'src/app/servicio/autor.service';
import { Autor } from 'src/app/modelo/Autor';

@Component({
  selector: 'app-nuevo-autor',
  templateUrl: './nuevo-autor.component.html',
  styleUrls: ['./nuevo-autor.component.css']
})

export class NuevoAutorComponent {
  codigo:number
  nacionalidad:string
  nombres:string

  estado = false

  listaAutor:Autor[]=[]

  soloLetras="[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,35}$"

formulario:FormGroup=new FormGroup({})

constructor(private apiAutor:AutorService, private fb:FormBuilder,private ruta:Router){}

ngOnInit(){
  this.apiAutor.getAutor().subscribe(response=>{
    this.listaAutor=response
  })

  this.formulario=this.fb.group({
    //mencionar que el codigo no tiene un tipo de validación los corchetes vacíos 04/10/2023
    codigo:[],
    nombres:[,[Validators.required,Validators.pattern(this.soloLetras)]],
    nacionalidad:[,[Validators.required,Validators.pattern(this.soloLetras)]]
  })
}

grabarDatos(){
  this.estado=true
  //validar estado de la validación
  if(this.formulario.invalid){
    return
  } 
  this.apiAutor.saveAutor(this.formulario.value).subscribe(response=>{
    Swal.fire(
      'Buen Trabajo',
      'Se registro correctamente!',
      'success'
    )
    this.ruta.navigate(["libro-lista"])
  })
}

}
