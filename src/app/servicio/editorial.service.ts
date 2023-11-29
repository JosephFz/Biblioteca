import { Injectable } from '@angular/core';
import { Editorial } from '../modelo/Editorial';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  
  private apiBase = 'http://localhost:8090'
  constructor(private api: HttpClient) { }
  getEditorial(){
    return this.api.get<Editorial[]>(this.apiBase+"/editorial/lista")
  }

  saveEditorial(bean: Editorial) {
    return this.api.post<Editorial>(this.apiBase + "/editorial/registrar", bean)
  }

  updateEditorial(bean:Editorial){
    return this.api.put<Editorial>(this.apiBase+"/editorial/actualizar",bean)
  }

  getConsultaEditorial(codigo:Number){
    return this.api.get<Editorial>(this.apiBase+"/editorial/buscar/"+codigo)
  }
  
  deleteEditorial(cod:Number){
    return this.api.delete(this.apiBase+"/editorial/eliminar/"+cod)
  }



}

