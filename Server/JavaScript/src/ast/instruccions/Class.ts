import { Instruccion } from "../Instrucciones";
export class Class extends Instruccion{

    instrucciones: Array<Instruccion>


    constructor(
        instrucciones: Array<Instruccion>, 
        line:Number, 
        column:Number
    ){
        super(line,column);
       this.instrucciones = instrucciones;
    }

    translate():string{
        return ""
    }
    getNameSon():string{
        return "CLASS";
    }
}