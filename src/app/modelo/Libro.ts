import { Autor } from "./Autor";

export class Libro{
    codigo:number
    estante:string
    anio:number
    cantidad:number
    titulo:string
    autor: Autor
    
    constructor(codigo:number, estante:string, anio:number, cantidad:number, titulo:string, autor: Autor){
        this.codigo = codigo
        this.estante = estante
        this.anio = anio
        this.cantidad = cantidad
        this.titulo = titulo
        this.autor = autor
    }
}