import { Injectable } from '@angular/core';
import { Libro } from '../modelo/Libro';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private apiBase='http://localhost:8090'

  constructor(private api: HttpClient) { }

  
  getLibro(){
    return this.api.get<Libro[]>(this.apiBase+"/libro/lista")
  }
  saveLibro(bean: Libro) {
    return this.api.post<Libro>(this.apiBase + "/libro/registrar", bean)
  }

  updateLibro(bean:Libro){
    return this.api.put<Libro>(this.apiBase+"/libro/actualizar",bean)
  }

  getConsultaLibro(codigo:Number){
    return this.api.get<Libro>(this.apiBase+"/libro/buscar/"+codigo)
  }
  
  deleteLibro(cod:Number){
    return this.api.delete(this.apiBase+"/libro/eliminar/"+cod)
  }
}
