import { Sentencia } from "../Sentencia";
import { TypeOperation } from "../Tipo";

export class OperacionLogica extends Sentencia {
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
            case TypeOperation.AND: return this.operador1.translate()+" && "+this.operador2.translate();
            case TypeOperation.OR: return this.operador1.translate()+" || "+this.operador2.translate();
            case TypeOperation.NOT: return "!"+this.operador1.translate();
            case TypeOperation.XOR: return this.operador1.translate() + " ^ "+this.operador2.translate();
            default : return '';
        }
    }
    getNameSon():string{
        switch (this.tipoOperacion) {
            case TypeOperation.AND: { return "AND"; }
            case TypeOperation.OR: { return "OR"; }
            case TypeOperation.XOR: { return "XOR"; }
            case TypeOperation.NOT: { return "NOT"; }
            default: { return ""; }
        }
    }
}