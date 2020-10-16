import { Sentencia } from "../Sentencia";
import { Type } from "../Tipo";

export class Declaracion extends Sentencia {

    id:string;
    valor:Sentencia;
    type:Type;

    constructor(
        type:Type,
        id:string,
        valor:Sentencia,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.id = id;
        this.valor = valor;
        this.type = type;
    }

    translate():string{
        return `var ${this.id} = ${this.valor.translate()}; \n`;
    }
    
    public getNameSon():string{
        return "DECLARACION";
    }
}