import { Sentencia } from "../Sentencia";

export class Identificador extends Sentencia {
    id:string;
    constructor(
        id:string,
        line:number,
        columna:number
    ) {
        super(line,columna);
        this.id = id
    }

    translate():string{
        return this.id;
    }
    getNameSon():string{
        return "IDENTIFICADOR";
    }
}