import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiBase = 'http://localhost:8090'
  constructor(private api: HttpClient) { }


  getCategoria(){
    return this.api.get<[Categoria]>(this.apiBase+"/categoria/lista")
  }

  saveCategoria(bean: Categoria) {
    return this.api.post<Categoria>(this.apiBase + "/categoria/registrar", bean)
  }

  updateCategoria(bean:Categoria){
    return this.api.put<Categoria>(this.apiBase+"/categoria/actualizar",bean)
  }

  getConsultaCategoria(codigo:Number){
    return this.api.get<Categoria>(this.apiBase+"/categoria/buscar/"+codigo)
  }
  
  deleteCategoria(cod:Number){
    return this.api.delete(this.apiBase+"/categoria/eliminar/"+cod)
  }



}
