import { Instruccion } from "../Instrucciones";
export class Asignacion extends Instruccion{

    id:string;
    valor:Instruccion;

    constructor(
        id:string,
        valor:Instruccion,
        line:Number,
        column:Number
    ){
        super(line,column);
        this.id = id;
        this.valor = valor;
    }

    translate():string{
        return this.id + " = " + this.valor.translate() + ";\n"
    }
    getNameSon():string{
        return "ASIGNACION";
    }
}