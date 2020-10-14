import { Instruccion } from "../Instrucciones";

export class Print extends Instruccion{

    expresion:Instruccion;
    
     constructor(
        expresion:Instruccion,
        line:Number,
        column:Number
    ){
        super(line,column);
        this.expresion = expresion;
    }

    translate():string{
        return "imprimir("+this.expresion.translate()+");\n";
    }

    getNameSon():string{
        return "PRINT";
    }
}