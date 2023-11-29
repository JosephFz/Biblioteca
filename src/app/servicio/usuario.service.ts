import { Injectable } from "@angular/core";
import { Usuario } from "../modelo/Usuario";

import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    private apiBase = 'http://localhost:8090'

    constructor(private api: HttpClient) { }

    getUsuario(){
        return this.api.get<Usuario[]>(this.apiBase+"/usuario/lista")
      }
      saveUsuario(bean: Usuario) {
        return this.api.post<Usuario>(this.apiBase + "/usuario/registrar", bean)
      }
    
      updateUsuario(bean:Usuario){
        return this.api.put<Usuario>(this.apiBase+"/usuario/actualizar",bean)
      }
    
      getConsultaUsuario(codigo:Number){
        return this.api.get<Usuario>(this.apiBase+"/usuario/buscar/"+codigo)
      }
      
      deleteUsuario(cod:Number){
        return this.api.delete(this.apiBase+"/usuario/eliminar/"+cod)
      }
}