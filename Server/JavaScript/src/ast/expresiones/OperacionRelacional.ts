import { Instruccion } from "../Instrucciones";
import { TypeOperation } from "../Tipo";

export class OperacionRelacional extends Instruccion{
    operador1:Instruccion;
    operador2:Instruccion;
    tipoOperacion:TypeOperation;

    constructor(
        tipoOperacion:TypeOperation,
        operador1:Instruccion,
        operador2:Instruccion,
        line:Number,
        column:Number
    ){
        super(line,column)
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.tipoOperacion = tipoOperacion;
    }

    translate():string{
        switch(this.tipoOperacion){
            case TypeOperation.MAYOR:return this.operador1.translate()+" > " + this.operador2.translate();
            case TypeOperation.MENOR:return this.operador1.translate()+" < " + this.operador2.translate();
            default:return ''
        }
    }
    getNameSon():string{
        switch(this.tipoOperacion){
            case TypeOperation.MAYOR:       {return "MAYOR";}
            case TypeOperation.MENOR:       {return "MENOR_QUE";}
            default:{ return "" }
        }
    }
}