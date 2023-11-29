import { Rol } from "./Rol"

export class Usuario{
    codigo:number
    apellido:string
    password:string
    login:string
    nombre:string 
    rol: Rol

    constructor(codigo:number, apellido:string, password:string, login:string, nombre:string, rol:Rol){
        this.codigo = codigo
        this.apellido = apellido
        this.password = password
        this.login = login
        this.nombre = nombre
        this.rol = rol
    }

}