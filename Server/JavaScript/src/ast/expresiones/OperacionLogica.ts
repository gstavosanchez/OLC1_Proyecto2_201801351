import { Instruccion } from "../Instrucciones";
import { TypeOperation } from "../Tipo";

export class OperacionLogica extends Instruccion{
    operador1:Instruccion;
    operador2:Instruccion;
    tipoOperacion:TypeOperation;

    constructor(
        tipoOperacion:TypeOperation,
        operador1:Instruccion,
        operador2:Instruccion,
        line:Number,
        column:number
    ){
        super(line,column);
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.tipoOperacion = tipoOperacion;
    }
    translate():string{
        switch(this.tipoOperacion){
            case TypeOperation.AND:
                return this.operador1.translate()+" and "+ this.operador2.translate();
            case TypeOperation.OR:
                return this.operador1.translate()+" or "+ this.operador2.translate();
            case TypeOperation.NOT:
                return " not "+ this.operador1.translate();
        }
        return "";
    }

    getNameSon():string{
        switch (this.tipoOperacion) {
            case TypeOperation.AND: { return "AND"; }
            case TypeOperation.OR: { return "OR"; }
            default: { return "NOT"; }
        }
    }
}