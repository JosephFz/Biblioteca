import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../modelo/Autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private apiBase = 'http://localhost:8090'

  constructor(private api: HttpClient) { }

  getAutor(){
    return this.api.get<Autor[]>(this.apiBase+"/autor/lista")
  }

  saveAutor(bean: Autor) {
    return this.api.post<Autor>(this.apiBase + "/autor/registrar", bean)
  }

  updateAutor(bean:Autor){
    return this.api.put<Autor>(this.apiBase+"/autor/actualizar",bean)
  }

  getConsultaAutor(codigo:Number){
    return this.api.get<Autor>(this.apiBase+"/autor/buscar/"+codigo)
  }
  
  deleteAutor(cod:Number){
    return this.api.delete(this.apiBase+"/autor/eliminar/"+cod)
  }



}
