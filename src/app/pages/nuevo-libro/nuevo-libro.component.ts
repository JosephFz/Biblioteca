import { Component } from '@angular/core';
import { Autor } from 'src/app/modelo/Autor';
import { AutorService } from 'src/app/servicio/autor.service';
import { LibroService } from 'src/app/servicio/libro.service';

//imports

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent {

    codigo:number
    estante:string
    anio:number
    cantidad:number
    titulo:string
    autor: Autor

    estado = false

    listaAutor:Autor[]=[]

    soloLetras="[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,15}$"

  formulario:FormGroup=new FormGroup({})

  constructor(private apiAutor:AutorService, private apiLibro:LibroService, private fb:FormBuilder,private ruta:Router){}


  ngOnInit(){
    this.apiAutor.getAutor().subscribe(response=>{
      this.listaAutor=response
    })

    this.formulario=this.fb.group({
      //mencionar que el codigo no tiene un tipo de validación los corchetes vacíos 04/10/2023
      codigo:[],
      estante:[,[Validators.required,Validators.pattern(this.soloLetras)]],
      anio:[,[Validators.required]],
      cantidad:[,[Validators.required]],
      titulo:[,[Validators.required]],
      conductor:[,[Validators.required]]
    })
  }

  grabarDatos(){
    this.estado=true
    //validar estado de la validación
    if(this.formulario.invalid){
      return
    } 
    this.apiLibro.saveLibro(this.formulario.value).subscribe(response=>{
      Swal.fire(
        'Buen Trabajo',
        'Se registro correctamente!',
        'success'
      )
      this.ruta.navigate(["libro-lista"])
    })
  }
}
