import { Instruccion } from "../Instrucciones";
import { TypeOperation } from "../Tipo";

export class OperacicionAritmetica extends Instruccion{
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
            case TypeOperation.SUMA:
                return this.operador1.translate()+" + "+ this.operador2.translate();
            case TypeOperation.RESTA:
                return this.operador1.translate()+" - "+ this.operador2.translate();
            case TypeOperation.MULTIPLICACION:
                return this.operador1.translate()+" * "+ this.operador2.translate();
            case TypeOperation.DIVISION:
                return this.operador1.translate()+" / "+ this.operador2.translate();
        }
        return "";
    }

    getNameSon():string{
        switch(this.tipoOperacion){
            case TypeOperation.SUMA:{return "SUMA"}
            case TypeOperation.RESTA:{return "RESTA"}
            case TypeOperation.MULTIPLICACION: { return "MULTIPLICACION"; }
            case TypeOperation.DIVISION: { return "DIVISION"; }
            default:{ return "MENOS_UNARIO"; }
        }
    }
}