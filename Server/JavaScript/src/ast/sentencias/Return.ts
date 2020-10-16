import { Sentencia } from "../Sentencia";

export class Return extends Sentencia {
    constructor(
        linea:number,
        column:number
    ) {
        super(linea,column);
    }
    translate():string{
        return "";
    }
    getNameSon():string{
        return "";
    }
}