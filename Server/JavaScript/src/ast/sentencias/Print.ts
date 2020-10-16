import { Sentencia } from "../Sentencia";

export class Print extends Sentencia {
    expresion:Sentencia;
    constructor(
        expresion:Sentencia,
        linea:number,
        columna:number
    ) {
        super(linea,columna);
        this.expresion = expresion;
    }

    translate():string{
        return `console.log(${this.expresion.translate()});`
    }
    getNameSon():string{
        return "PRINT";
    }
}