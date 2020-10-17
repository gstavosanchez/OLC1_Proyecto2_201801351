import { Sentencia } from "../Sentencia";
import { Type } from "../Tipo";

export class Parametro extends Sentencia {

    private id:string;
    private type:Type;

    constructor(
        type:Type,
        id:string,
        linea:number,
        column:number
    ) {
        super(linea,column);
        this.id = id;
        this.type = type;
    }

    translate():string{
        return `${this.id} `;
    }
    
    public getNameSon():string{
        return "Parametro";
    }
}