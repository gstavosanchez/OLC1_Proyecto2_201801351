import { Instruccion } from "../Instrucciones";

export class Primitivo extends Instruccion{
    valor:any;

    constructor(
        valor:any,
        line:Number,
        column:Number
    ){
        super(line,column);
        this.valor = valor;
    }
    translate():string{
        return this.valor;
    }
    getNameSon():string{
        return "PRIMITIVO"
    }
}