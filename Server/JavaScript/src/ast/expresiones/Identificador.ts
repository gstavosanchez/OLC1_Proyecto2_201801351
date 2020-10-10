import { Instruccion } from "../Instrucciones"

export class Identificador extends Instruccion{

    id:string;

    constructor(
        id:string,
        line:number,
        column:number
    ){
        super(line,column);
        this.id = id;
    }

    translate():string{
        return this.id;
    }

    getNameSon():string{
        return "IDENTIFICADOR";
    }


}