import { Injectable } from '@angular/core';
import { Localizacion } from '../modelo/Localizacion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {
  private apiBase = 'http://localhost:8090'

  constructor(private api: HttpClient) { }

  getLocalizacion(){
    return this.api.get<Localizacion[]>(this.apiBase+"/localizacion/lista")
  }

  saveLocalizacion(bean: Localizacion) {
    return this.api.post<Localizacion>(this.apiBase + "/localizacion/registrar", bean)
  }

  updateLocalizacionr(bean:Localizacion){
    return this.api.put<Localizacion>(this.apiBase+"/localizacion/actualizar",bean)
  }

  getConsultaLocalizacion(codigo:Number){
    return this.api.get<Localizacion>(this.apiBase+"/localizacion/buscar/"+codigo)
  }
  
  deleteLocalizacion(cod:Number){
    return this.api.delete(this.apiBase+"/localizacion/eliminar/"+cod)
  }



}

