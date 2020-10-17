import { Sentencia } from "../Sentencia";

export class Primitivo extends Sentencia {
    valor:any;
    constructor(
        valor:any,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.valor = valor;
    }
    translate():string{
        return this.valor;
    }
    getNameSon():string{
        return "PRIMITIVO";
        
    }
}