import { Sentencia } from "../Sentencia";
import { TypeOperation } from "../Tipo";

export class OperacionRelacional extends Sentencia {
    operador1:Sentencia;
    operador2:Sentencia;
    tipoOperacion:TypeOperation;

    constructor(
        tipoOperacion:TypeOperation,
        operador1:Sentencia,
        operador2:Sentencia,
        line:number,
        column:number
    ) {
        super(line,column);
        this.operador1 = operador1;
        this.operador2 = operador2;
        this.tipoOperacion = tipoOperacion;
    }
    translate():string{
        switch(this.tipoOperacion){
            case TypeOperation.MAYOR:return this.operador1.translate()+" > "+this.operador2.translate();
            case TypeOperation.MENOR:return this.operador1.translate()+" < "+this.operador2.translate();
            case TypeOperation.MAYOR_IGUAL:return this.operador1.translate()+" >= "+this.operador2.translate();
            case TypeOperation.MENOR_IGUAL:return this.operador1.translate()+" <= "+this.operador2.translate();
            case TypeOperation.COMPARACION:return this.operador1.translate()+" == "+this.operador2.translate();
            case TypeOperation.DIFERENTE: return this.operador1.translate() + " != "+ this.operador2.translate();
            default:return "";
        }
    }

    getNameSon():string{
        switch(this.tipoOperacion){
            case TypeOperation.MAYOR:{return "MAYOR";}
            case TypeOperation.MENOR:{return "MENOR"}
            case TypeOperation.MAYOR_IGUAL:{return "MAYOR_IGUAL"}
            case TypeOperation.MENOR_IGUAL:{return "MENOR_IGUAL"}
            case TypeOperation.COMPARACION:{return "COMPARACION";}
            case TypeOperation.DIFERENTE: {return "DIFERENCIA"}
            default:return "";
        }
    }
}