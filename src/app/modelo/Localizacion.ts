export class Localizacion{
    codigo:number
    estante:string
    nivel:string
    seccion:string

    constructor(codigo:number, estante:string, nivel:string, seccion:string){
        this.codigo = codigo
        this.estante = estante
        this.nivel = nivel
        this.seccion = seccion
    }
}